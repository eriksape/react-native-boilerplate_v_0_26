import _ from 'lodash'
import pathToRegexp from 'path-to-regexp'
//import fetch from 'isomorphic-fetch'

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    throw response
  }
}

const createResponse = (response, type='success' ) =>
  deserialize(response).then(value => ({
    url: response.url,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    value: value,
    type: type
  }))


const createErrorResponse = response =>
  createResponse(response, 'fail').then( response => response )

const deserialize = response => {
  const header = response.headers.get('Content-Type') || ''
  if (header.indexOf('application/json') > -1) return response.json()
  if (header.indexOf('application/ld+json') > -1) return response.json()
  if (header.indexOf('application/octet-stream') > -1) return response.arrayBuffer()
  return response.text()
}

class abstractActions {
  constructor(name){
    this.name    = name
    this.success = { name:{}, action:{} }
    this.fail    = { name:{}, action:{} }
  }

  set(requests){
    const self = this
    let lol = {}
    _.each(requests, (request, name) => {
      this.success.name[name]   = this.name + '_'  + name.toUpperCase() + '_SUCCESS'
      this.fail.name[name]      = this.name + '_'  + name.toUpperCase() + '_FAIL'

      request.success = this.success.name[name]
      request.fail    = this.fail.name[name]

      this[name]      = this.createRequest.bind(this, request)

    } )
  }

  get(){
    return {
      success: this.success.name,
      fail:    this.fail.name
    }
  }

  createRequest(){
    const method               = arguments[0]
    const config               = arguments[1]  || { body:{} }
    const {location, options}  = this
    const {uri, success, fail} = method
    let url                    = pathToRegexp.compile(method.uri)(config.pathKeys)
    options.method             = method.method


    if( !_.isEqual( config.body, {} ) ) options.body = JSON.stringify(config.body)

    return dispatch => fetch(location+url, options)
      .then( checkStatus )
      .then(createResponse, createErrorResponse)
      .then( value => dispatch({
        payload:{
          value:value.value,
          pathKeys:config.pathKeys
        },
        type: (_.isEqual('success',value.type)?success:fail)
      })
    )
  }
}

export default class actions extends abstractActions{
  constructor(name, location, requests, options = {}){
    super();
    this.name     = name
    this.location = location

    this.options = {
      mode:        'cors',
      credentials: 'include',
      headers:     {
        "Content-type":     "application/json",
        'X-Requested-With': 'XMLHttpRequest',
      },
    }
    if(!_.isUndefined(options.headers)){
      this.options.headers= _.assign(this.options.headers, options.headers)
      delete options.headers
    }
    this.options = _.assign(this.options, options)

    this.set(requests)

  }

  get constants(){
    const values = this.get()

    values.initialize = this.name+'_initialize'
    values.finalize   = this.name+'_finalize'

    return values
  }

}

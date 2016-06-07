import {isEqual, isUndefined} from 'lodash'
import Immutable, {fromJS} from 'immutable'

import auth from './authActions'
import store from 'react-native-simple-store'

const defaultState = fromJS({
  errors: {},
  login: false,
})

const {success, fail} = auth.constants

export default (state = defaultState, action)=>{
  switch (action.type) {
    case success.verify:
      return state.merge({
        errors:{},
        login:true,
      })
      //store.save( 'auth', JSON.stringify(action.payload.value) )
      //return action.payload.value
      break
    case fail.verify:
      return state.merge({
        errors: action.payload.value,
        login: false,
      })
      break
    case 'auth_RESET_LOGIN':
      return state.merge({
        errors: {},
        login: false,
      })
      break
    case 'GET_AUTH':
      return state.merge({
        errors:{},
        login:true?true:false,
      })
      break
    case 'LOGOUT_AUTH':
      return defaultState
      break
    default:
      return state
  }
}

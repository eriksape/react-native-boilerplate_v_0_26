import auth from '../actions/auth'
import store from 'react-native-simple-store'
import {isEqual, isUndefined} from 'lodash'


const {success, fail} = auth.constants
export default (state = {}, action)=>{

  switch (action.type) {
    case success.verify:
      store.save( 'auth', JSON.stringify(action.payload.value) )
      return action.payload.value
      break
    case 'GET_AUTH':
      return store.get('auth')
      break
    case fail.verify:
      action.payload.extra.reject(action.payload.value)
      return {}
      break
    case 'LOGOUT_AUTH':
      store.delete('auth')
      return {}
      break
    default:
      return state
  }
}

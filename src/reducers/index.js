import { combineReducers } from 'redux'
import {reducer as form} from 'redux-form'
import auth from './auth/authReducer'
import clientdevice from './clientdevice/clientdeviceReducer'


const rootReducer = combineReducers({
  form,
  auth,
  clientdevice,
});

export default rootReducer

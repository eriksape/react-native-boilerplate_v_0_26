import { combineReducers } from 'redux'
import {reducer as form} from 'redux-form'
import clientdevice from './clientdevice/clientdeviceReducer'


const rootReducer = combineReducers({
  form,
  clientdevice,
});

export default rootReducer

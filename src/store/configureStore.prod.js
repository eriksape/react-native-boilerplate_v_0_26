import { createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(onComplete) {
  const store = createStore(
    rootReducer,
    undefined, // no need for initialState
    compose(
      applyMiddleware(thunk),
    )
  )
  return store
}

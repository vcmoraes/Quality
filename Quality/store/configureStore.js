import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { middleware } from '../navigation'

const configureStore = () => {
  let store = createStore(reducers, applyMiddleware(thunk, middleware))
  return store
}

export default configureStore

import { handleRequests, gw2UIReducer } from 'gw2-ui'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

const { requestsReducer, requestsMiddleware } = handleRequests()

const reducers = combineReducers({
  requests: requestsReducer,
  gw2UiStore: gw2UIReducer,
})

const composeEnhancers =
  (typeof window !== 'undefined' &&
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export default () => {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...requestsMiddleware)),
  )

  return store
}

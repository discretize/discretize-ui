import { gw2UIReducer } from 'gw2-ui-bulk'
import { combineReducers, compose, createStore } from 'redux'

const reducers = {
  gw2UiStore: gw2UIReducer,
}

const composeEnhancers =
  (typeof window !== 'undefined' &&
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export default () => {
  const store = createStore(gw2UIReducer)
  return store
}

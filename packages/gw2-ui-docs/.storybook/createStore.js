import { gw2UIReducer } from 'gw2-ui-bulk'
import { combineReducers, compose, createStore } from 'redux'

const reducers = combineReducers({
  gw2UiStore: gw2UIReducer,
})

const composeEnhancers =
  (typeof window !== 'undefined' &&
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export default () => {
  const store = createStore(reducers, composeEnhancers())
  return store
}

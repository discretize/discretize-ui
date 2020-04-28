import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducer, saga, ROOT_REDUCER_KEY } from 'gw2-ui';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const compose =
  // eslint-disable-next-line no-underscore-dangle
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const enhancer = applyMiddleware(...middlewares);

export default () => {
  const store = createStore(
    combineReducers({
      [ROOT_REDUCER_KEY]: reducer,
    }),
    (compose && compose(enhancer)) || enhancer,
  );

  sagaMiddleware.run(saga);

  return store;
};

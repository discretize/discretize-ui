import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducer, saga } from 'gw2-ui-redux';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const compose =
  // eslint-disable-next-line no-underscore-dangle
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const enhancer = applyMiddleware(...middlewares);

export default () => {
  const store = createStore(
    reducer,
    (compose && compose(enhancer)) || enhancer,
  );

  sagaMiddleware.run(saga);

  return store;
};

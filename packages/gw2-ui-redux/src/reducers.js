import { handleActions } from 'redux-actions';

import { fetch, cancel, fetchSuccess, fetchError } from './actions';
import { PATHS, KEYS } from './constants';

const { DATA: dataKey, ERROR: errorKey, PENDING: pendingKey } = KEYS;

export default handleActions(
  {
    [fetch]: (state, { payload: { id, path } }) => ({
      ...state,
      [path]: {
        ...state[path],
        [id]: {
          [errorKey]: null,
          [pendingKey]: (state[path][id]?.[pendingKey] || 0) + 1,
        },
      },
    }),
    [cancel]: (state, { payload: { id, path } }) => ({
      ...state,
      [path]: {
        ...state[path],
        [id]: {
          [pendingKey]: (state[path][id]?.[pendingKey] || 1) - 1,
        },
      },
    }),
    [fetchSuccess]: (state, { payload: data, meta: { id, path } }) => ({
      ...state,
      [path]: {
        ...state[path],
        [id]: {
          [dataKey]: data,
          [errorKey]: null,
          [pendingKey]: (state[path][id]?.[pendingKey] || 1) - 1,
        },
      },
    }),
    [fetchError]: (state, { payload: error, meta: { id, path } }) => ({
      ...state,
      [path]: {
        ...state[path],
        [id]: {
          [dataKey]: null,
          [errorKey]: error,
          [pendingKey]: (state[path][id]?.[pendingKey] || 1) - 1,
        },
      },
    }),
  },
  Object.assign(...Object.values(PATHS).map(path => ({ [path]: {} }))),
);

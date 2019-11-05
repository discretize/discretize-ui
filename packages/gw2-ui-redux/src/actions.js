import { createActions } from 'redux-actions';

import { KEYS, PATHS } from './constants';

const { DATA: dataKey, ERROR: errorKey } = KEYS;
const {
  ITEMS: itemsPath,
  SKILLS: skillsPath,
  SPECIALIZATIONS: specializationsPath,
  TRAITS: traitsPath,
} = PATHS;

export const TYPES = {
  FETCH: 'FETCH',
  CANCEL: 'CANCEL',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
};

export const { fetch, cancel, fetchSuccess, fetchError } = createActions({
  [TYPES.FETCH]: undefined,
  [TYPES.CANCEL]: undefined,
  [TYPES.FETCH_SUCCESS]: [
    ({ [dataKey]: data }) => data,
    ({ id, path }) => ({ id, path }),
  ],
  [TYPES.FETCH_ERROR]: [
    ({ [errorKey]: error }) => error,
    ({ id, path }) => ({ id, path }),
  ],
});

export const {
  fetchItem,
  cancelItem,
  fetchSkill,
  cancelSkill,
  fetchSpecialization,
  cancelSpecialization,
  fetchTrait,
  cancelTrait,
} = {
  fetchItem: id => fetch({ id, path: itemsPath }),
  cancelItem: id => cancel({ id, path: itemsPath }),
  fetchSkill: id => fetch({ id, path: skillsPath }),
  cancelSkill: id => cancel({ id, path: skillsPath }),
  fetchSpecialization: id => fetch({ id, path: specializationsPath }),
  cancelSpecialization: id => cancel({ id, path: specializationsPath }),
  fetchTrait: id => fetch({ id, path: traitsPath }),
  cancelTrait: id => cancel({ id, path: traitsPath }),
};

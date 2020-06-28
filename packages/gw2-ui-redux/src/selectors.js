import createCachedSelector from 're-reselect';

import { ROOT_REDUCER_KEY, PATHS, KEYS } from './constants';

const {
  ITEMS: itemsPath,
  SKILLS: skillsPath,
  SPECIALIZATIONS: specializationsPath,
  TRAITS: traitsPath,
} = PATHS;
const { DATA: dataKey, ERROR: errorKey, PENDING: pendingKey } = KEYS;

const getData = ({ [dataKey]: data }) => data;

const getError = ({ [errorKey]: error }) => error;

const isLoading = ({ [pendingKey]: pending }) => pending > 0;

const idCacheKey = (state, { id }) => id;

const getItem = ({ [ROOT_REDUCER_KEY]: { [itemsPath]: items } }, { id }) =>
  items[id] || {};

const getSkill = ({ [ROOT_REDUCER_KEY]: { [skillsPath]: skills } }, { id }) =>
  skills[id] || {};

const getSpecialization = (
  { [ROOT_REDUCER_KEY]: { [specializationsPath]: specializations } },
  { id },
) => specializations[id] || {};

const getTrait = ({ [ROOT_REDUCER_KEY]: { [traitsPath]: traits } }, { id }) =>
  traits[id] || {};

export const getItemData = createCachedSelector(getItem, getData)(idCacheKey);
export const getItemError = createCachedSelector(getItem, getError)(idCacheKey);
export const isItemLoading = createCachedSelector(getItem, isLoading)(
  idCacheKey,
);

export const getSkillData = createCachedSelector(getSkill, getData)(idCacheKey);
export const getSkillError = createCachedSelector(getSkill, getError)(
  idCacheKey,
);
export const isSkillLoading = createCachedSelector(getSkill, isLoading)(
  idCacheKey,
);

export const getSpecializationData = createCachedSelector(
  getSpecialization,
  getData,
)(idCacheKey);
export const getSpecializationError = createCachedSelector(
  getSpecialization,
  getError,
)(idCacheKey);
export const isSpecializationLoading = createCachedSelector(
  getSpecialization,
  isLoading,
)(idCacheKey);

export const getTraitData = createCachedSelector(getTrait, getData)(idCacheKey);
export const getTraitError = createCachedSelector(getTrait, getError)(
  idCacheKey,
);
export const isTraitLoading = createCachedSelector(getTrait, isLoading)(
  idCacheKey,
);

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

const isFetching = ({ [pendingKey]: pending }) => pending > 0;

const isFetched = ({ [dataKey]: data }) => !!data;

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
export const isItemFetching = createCachedSelector(getItem, isFetching)(
  idCacheKey,
);
export const isItemFetched = createCachedSelector(getItem, isFetched)(
  idCacheKey,
);

export const getSkillData = createCachedSelector(getSkill, getData)(idCacheKey);
export const getSkillError = createCachedSelector(getSkill, getError)(
  idCacheKey,
);
export const isSkillFetching = createCachedSelector(getSkill, isFetching)(
  idCacheKey,
);
export const isSkillFetched = createCachedSelector(getSkill, isFetched)(
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
export const isSpecializationFetching = createCachedSelector(
  getSpecialization,
  isFetching,
)(idCacheKey);
export const isSpecializationFetched = createCachedSelector(
  getSpecialization,
  isFetched,
)(idCacheKey);

export const getTraitData = createCachedSelector(getTrait, getData)(idCacheKey);
export const getTraitError = createCachedSelector(getTrait, getError)(
  idCacheKey,
);
export const isTraitFetching = createCachedSelector(getTrait, isFetching)(
  idCacheKey,
);
export const isTraitFetched = createCachedSelector(getTrait, isFetched)(
  idCacheKey,
);

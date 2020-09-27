import {
  FETCH_ITEM,
  FETCH_SKILL,
  FETCH_SPECIALIZATION,
  FETCH_TRAIT,
} from './constants';

export const fetchItem = id => ({
  type: FETCH_ITEM,
  request: {
    url: `/items/${id}`,
  },
  meta: {
    cache: true,
    requestKey: `${id}`,
  },
});

export const fetchSkill = id => ({
  type: FETCH_SKILL,
  request: {
    url: `/skills/${id}`,
  },
  meta: {
    cache: true,
    requestKey: `${id}`,
  },
});

export const fetchSpecialization = id => ({
  type: FETCH_SPECIALIZATION,
  request: {
    url: `/specializations/${id}`,
  },
  meta: {
    cache: true,
    requestKey: `${id}`,
  },
});

export const fetchTrait = id => ({
  type: FETCH_TRAIT,
  request: {
    url: `/traits/${id}`,
  },
  meta: {
    cache: true,
    requestKey: `${id}`,
  },
});

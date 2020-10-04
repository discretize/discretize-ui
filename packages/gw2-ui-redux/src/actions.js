import {
  FETCH_ITEM,
  FETCH_SKILL,
  FETCH_SPECIALIZATION,
  FETCH_TRAIT,
} from './constants'

export const fetchItem = (id) => ({
  type: FETCH_ITEM,
  request: {
    url: `/items/${id}?lang=en`,
  },
  meta: {
    cache: true,
    requestKey: `${id}`,
    takeLatest: false,
  },
})

export const fetchSkill = (id) => ({
  type: FETCH_SKILL,
  request: {
    url: `/skills/${id}?lang=en`,
  },
  meta: {
    cache: true,
    requestKey: `${id}`,
    takeLatest: false,
  },
})

export const fetchSpecialization = (id) => ({
  type: FETCH_SPECIALIZATION,
  request: {
    url: `/specializations/${id}?lang=en`,
  },
  meta: {
    cache: true,
    requestKey: `${id}`,
    takeLatest: false,
  },
})

export const fetchTrait = (id) => ({
  type: FETCH_TRAIT,
  request: {
    url: `/traits/${id}?lang=en`,
  },
  meta: {
    cache: true,
    requestKey: `${id}`,
    takeLatest: false,
  },
})

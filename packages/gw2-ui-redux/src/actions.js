import {
  FETCH_ITEM,
  FETCH_ITEMS,
  FETCH_SKILL,
  FETCH_SKILLS,
  FETCH_SPECIALIZATION,
  FETCH_SPECIALIZATIONS,
  FETCH_TRAIT,
  FETCH_TRAITS,
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

export const fetchItems = (ids, pageName) => ({
  type: FETCH_ITEMS,
  request: {
    url: `/items?ids=${ids}&lang=en`,
  },
  meta: {
    cache: true,
    takeLatest: false,
    requestKey: pageName,
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

export const fetchSkills = (ids, pageName) => ({
  type: FETCH_SKILLS,
  request: {
    url: `/skills?ids=${ids}&lang=en`,
  },
  meta: {
    cache: true,
    takeLatest: false,
    requestKey: pageName,
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

export const fetchSpecializations = (ids, pageName) => ({
  type: FETCH_SPECIALIZATIONS,
  request: {
    url: `/specializations?ids=${ids}&lang=en`,
  },
  meta: {
    cache: true,
    takeLatest: false,
    requestKey: pageName,
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

export const fetchTraits = (ids, pageName) => ({
  type: FETCH_TRAITS,
  request: {
    url: `/traits?ids=${ids}&lang=en`,
  },
  meta: {
    cache: true,
    requestKey: pageName,
    takeLatest: false,
  },
})

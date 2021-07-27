import {
  FETCH_ITEM,
  FETCH_ITEMS,
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

export const fetchItems = (ids, pageName) => ({
  type: FETCH_ITEMS,
  request: {
    // TODO clean up this method so it takes an error instead of a string.
    // pad ',1' here bc the ids parameter of the gw2 api expects at least two items
    url: `/items?ids=${ids.indexOf(',') > 0 ? ids : `${ids},1`}?lang=en`,
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

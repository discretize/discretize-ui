import axios from 'axios'
import functionBatch from 'function-batch'
import { BASE_URL } from './constants'
import {
  addItem,
  addItemError,
  addSkill,
  addSkillError,
  addSpecialization,
  addSpecializationsError,
  addTrait,
  addTraitError,
} from './gw2-ui-slice'

const addGeneric = (add, addError, name) => (ids, dispatch) => {
  axios.get(`${BASE_URL}/${name}?ids=${ids}&lang=en`).then((res) => {
    res.data.forEach((element) => {
      dispatch(add(element))
    })
    const missing = ids.filter(
      (id) => !res.data.map((rec) => Number(rec.id)).includes(Number(id)),
    )
    missing.forEach((element) => {
      dispatch(
        addError({
          id: element,
          code: '404',
          message: 'Not Found',
          name: `ID: ${element}`,
        }),
      )
    })
  })
}

export const fetchItem = functionBatch(
  addGeneric(addItem, addItemError, 'items'),
)
export const fetchSpecialization = functionBatch(
  addGeneric(addSpecialization, addSpecializationsError, 'specializations'),
)
export const fetchSkill = functionBatch(
  addGeneric(addSkill, addSkillError, 'skills'),
)
export const fetchTrait = functionBatch(
  addGeneric(addTrait, addTraitError, 'traits'),
)

/*
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
    normalize: true,
    takeLatest: false,
    requestKey: pageName,
    onSuccess: (response) => {
      return {
        ...response,
        data: response.data.map((d) => ({ ...d, gw2UIType: 'Item' })),
      }
    },
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
    normalize: true,
    takeLatest: false,
    requestKey: pageName,
    onSuccess: (response) => {
      return {
        ...response,
        data: response.data.map((d) => ({ ...d, gw2UIType: 'Skill' })),
      }
    },
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
    normalize: true,
    takeLatest: false,
    requestKey: pageName,
    onSuccess: (response) => {
      return {
        ...response,
        data: response.data.map((d) => ({ ...d, gw2UIType: 'Specialization' })),
      }
    },
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
    normalize: true,
    requestKey: pageName,
    takeLatest: false,
    onSuccess: (response) => {
      return {
        ...response,
        data: response.data.map((d) => ({ ...d, gw2UIType: 'Traits' })),
      }
    },
  },
})
*/

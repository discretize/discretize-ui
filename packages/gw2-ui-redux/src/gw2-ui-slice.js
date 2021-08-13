/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

/**
 * Adds an id to a [names]'s collection of ids for a page (action.payload.page)
 * @param {String} name the type of component that should be appended at
 * @returns
 */
const add = (name, type) => (state, action) => {
  const array = state[type][name]

  // dont add duplicates
  if (!array.find((a) => a.id === action.payload.id)) {
    // eslint-disable-next-line no-param-reassign
    state[type][name] = array.concat(action.payload)
  }
}

const gw2uiSlice = createSlice({
  name: 'gw2-ui-data',
  initialState: {
    ids: {
      items: [],
      skills: [],
      specializations: [],
      traits: [],
    },
    errors: {
      items: [],
      skills: [],
      specializations: [],
      traits: [],
    },
  },
  reducers: {
    addItem: add('items', 'ids'),
    addItemError: add('items', 'errors'),
    addSkill: add('skills', 'ids'),
    addSkillError: add('skills', 'errors'),
    addSpecialization: add('specializations', 'ids'),
    addSpecializationsError: add('specializations', 'errors'),
    addTrait: add('traits', 'ids'),
    addTraitError: add('traits', 'errors'),
  },
})

export const {
  addItem,
  addItemError,
  addSkill,
  addSkillError,
  addSpecialization,
  addSpecializationsError,
  addTrait,
  addTraitError,
} = gw2uiSlice.actions

export default gw2uiSlice.reducer

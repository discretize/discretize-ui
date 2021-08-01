/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

/**
 * Adds an id to a [names]'s collection of ids for a page (action.payload.page)
 * @param {String} name the type of component that should be appended at
 * @returns
 */
const add = (name) => (state, action) => {
  let array = []
  if (state.ids[name][action.payload.page]) {
    // if there is an existing entry, fetch it and append to it
    array = state.ids[name][action.payload.page]
  }

  // dont add duplicates
  if (array.filter((a) => a.id === action.payload.id).length === 0) {
    // eslint-disable-next-line no-param-reassign
    state.ids[name][action.payload.page] = array.concat(action.payload.id)
  }
}

const docsSlice = createSlice({
  name: 'gw2-ui-data',
  initialState: {
    ids: {
      items: {},
      skills: {},
      specializations: {},
      traits: {},
    },
  },
  reducers: {
    addItem: add('items'),
    addSkill: add('skills'),
    addSpecialization: add('specializations'),
    addTrait: add('traits'),
  },
})

export const {
  addItem,
  addSkill,
  addSpecialization,
  addTrait,
} = docsSlice.actions

export default docsSlice.reducer

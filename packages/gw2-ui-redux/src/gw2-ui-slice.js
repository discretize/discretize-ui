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

/**
 * Add gw2data to the shared global store
 * @param {String} name the type of component that should be added to
 * @returns
 */
const addToStore = (name) => (state, action) => {
  state.store[name] = state.store[name].concat(action.payload)
}

const docsSlice = createSlice({
  name: 'gw2-ui-docs',
  initialState: {
    ids: {
      items: {},
      skills: {},
      specializations: {},
      traits: {},
    },
    store: {
      items: [],
      skills: [],
      specializations: [],
      traits: [],
    },
  },
  reducers: {
    addItem: add('items'),
    addItemsToStore: addToStore('items'),
    addSkill: add('skills'),
    addSkillsToStore: addToStore('skills'),
    addSpecialization: add('specializations'),
    addSpecializationsToStore: addToStore('specializations'),
    addTrait: add('traits'),
    addTraitsToStore: addToStore('traits'),
  },
})

export const getItemsFromStore = (ids) => (state) =>
  state.gw2UiStore.store.items.filter((s) => ids.includes(s.id))
export const getSkillsFromStore = (ids) => (state) =>
  state.gw2UiStore.store.skills.filter((s) => ids.includes(s.id))
export const getSpecializationsFromStore = (ids) => (state) =>
  state.gw2UiStore.store.specializations.filter((s) => ids.includes(s.id))
export const getTraitsFromStore = (ids) => (state) =>
  state.gw2UiStore.store.traits.filter((s) => ids.includes(s.id))

export const {
  addItem,
  addItemsToStore,
  addSkill,
  addSkillsToStore,
  addSpecialization,
  addSpecializationsToStore,
  addTrait,
  addTraitsToStore,
} = docsSlice.actions

export default docsSlice.reducer

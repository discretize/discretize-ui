import { createSlice } from '@reduxjs/toolkit'

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
    addItemsToStore: (state, action) => {
      state.store.items = state.store.items.concat(action.payload)
    },
    addSkill: add('skills'),
    addSpecialization: add('specializations'),
    addTrait: add('traits'),
  },
})

export const getItemsFromStore = (ids) => (state) =>
  state.gw2UiStore.store.items.filter((s) => ids.includes(s.id))

export const {
  addItem,
  addItemsToStore,
  addSkill,
  addSpecialization,
  addTrait,
} = docsSlice.actions

export default docsSlice.reducer

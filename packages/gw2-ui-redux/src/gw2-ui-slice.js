import { createSlice } from '@reduxjs/toolkit'

const add = (name) => (state, action) => {
  let array = []
  if (state[name][action.payload.page]) {
    // if there is an existing entry, fetch it and append to it
    array = state[name][action.payload.page]
  }

  // dont add duplicates
  if (array.filter((a) => a.id === action.payload.id).length === 0) {
    // eslint-disable-next-line no-param-reassign
    state[name][action.payload.page] = array.concat(action.payload)
  }
}

const docsSlice = createSlice({
  name: 'gw2-ui-docs',
  initialState: {
    items: {},
    skills: {},
    specializations: {},
    traits: {},
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
export const getItems = (id) => (state) => state.gw2UiStore.items[id]

export default docsSlice.reducer

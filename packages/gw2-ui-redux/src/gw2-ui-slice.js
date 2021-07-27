import { createSlice } from '@reduxjs/toolkit'

const docsSlice = createSlice({
  name: 'gw2-ui-docs',
  initialState: {
    toQuery: {},
  },
  reducers: {
    add: (state, action) => {
      let array = []
      if (state.toQuery[action.payload.page]) {
        // if there is an existing entry, fetch it and append to it
        array = state.toQuery[action.payload.page]
      }

      // dont add duplicates
      if (array.filter((a) => a.id === action.payload.id).length === 0) {
        // eslint-disable-next-line no-param-reassign
        state.toQuery[action.payload.page] = array.concat(action.payload)
      }
    },
  },
})
export const { add } = docsSlice.actions
export const get = (id) => (state) => state.gw2UiStore.toQuery[id]

export default docsSlice.reducer

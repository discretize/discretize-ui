/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'

export type GW2UiSliceValueName =
  | 'items'
  | 'skills'
  | 'specializations'
  | 'traits'

export type GW2UiSliceTypeName = keyof GW2UiSliceState

interface GW2UiSliceData {
  id: number
}

export interface GW2UiSliceIdentifier extends GW2UiSliceData {}

export interface GW2UiSliceIdentifiers {
  items: GW2UiSliceIdentifier[]
  skills: GW2UiSliceIdentifier[]
  specializations: GW2UiSliceIdentifier[]
  traits: GW2UiSliceIdentifier[]
}

export interface GW2UiSliceError extends GW2UiSliceData {
  code: string
  message: string
  name: string
}

export interface GW2UiSliceErrors {
  items: GW2UiSliceError[]
  skills: GW2UiSliceError[]
  specializations: GW2UiSliceError[]
  traits: GW2UiSliceError[]
}

export interface GW2UiSliceState {
  ids: GW2UiSliceIdentifiers
  errors: GW2UiSliceErrors
}

/**
 * Adds an id to a [names]'s collection of ids for a page (action.payload.page)
 * @param {String} name the type of component that should be appended at
 * @returns
 */
const add =
  (name: GW2UiSliceValueName, type: GW2UiSliceTypeName) =>
  (state: GW2UiSliceState, action: PayloadAction<GW2UiSliceData>) => {
    const array: GW2UiSliceData[] = state[type][name]

    // don't add duplicates
    if (!array.find((a: GW2UiSliceData) => a.id === action.payload.id)) {
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

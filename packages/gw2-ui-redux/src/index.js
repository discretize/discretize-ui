import gw2uiReducer from './gw2-ui-slice'

export const gw2UIReducer = gw2uiReducer

export {
  fetchItem,
  fetchSkill,
  fetchSpecialization,
  fetchTrait,
} from './actions'
export {
  FETCH_ITEM,
  FETCH_ITEMS,
  FETCH_SKILL,
  FETCH_SKILLS,
  FETCH_SPECIALIZATION,
  FETCH_SPECIALIZATIONS,
  FETCH_TRAIT,
  FETCH_TRAITS,
} from './constants'

import { createDriver } from '@redux-requests/axios'
import { handleRequests as reduxRequestsHandleRequests } from '@redux-requests/core'
import axios from 'axios'
import { BASE_URL } from './constants'
import gw2uiReducer from './gw2-ui-slice'

export const gw2UIReducer = gw2uiReducer

export {
  fetchItem,
  fetchItems,
  fetchSkill,
  fetchSpecialization,
  fetchTrait,
} from './actions'
export {
  FETCH_ITEM,
  FETCH_ITEMS,
  FETCH_SKILL,
  FETCH_SPECIALIZATION,
  FETCH_TRAIT,
} from './constants'
export const handleRequests = ({ ssr = false } = {}) =>
  reduxRequestsHandleRequests({
    driver: createDriver(
      axios.create({
        baseURL: BASE_URL,
      }),
    ),
    cache: true,
    ssr: ssr ? 'server' : 'client',
  })

import axios from 'axios'
import functionBatch from 'function-batch'
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
import { BASE_URL } from './constants'

const addGeneric = (add, addError, name) => (ids, dispatch) => {
  const cleaned = ids.filter((id) => id !== '')

  axios
    .get(`${BASE_URL}/${name}?ids=${cleaned}&lang=en`)
    .then((res) => {
      res.data.forEach((element) => {
        dispatch(add(element))
      })
      const missing = cleaned.filter(
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
    .catch((error) => {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        cleaned.forEach((element) => {
          dispatch(
            addError({
              id: element,
              code: `${error.response.status}`,
              message: `${error.response.data}`,
              name: `ID: ${element}`,
            }),
          )
        })
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message)
      }
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

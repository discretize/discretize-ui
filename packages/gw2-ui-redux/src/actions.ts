import axios from 'axios'
import Batcher from 'batcher-js'
import {
  addItem,
  addItemError,
  addSkill,
  addSkillError,
  addSpecialization,
  addSpecializationsError,
  addTrait,
  addTraitError,
  GW2UiSliceData,
  GW2UiSliceError,
  GW2UiSliceIdentifier,
} from './gw2-ui-slice'
import BASE_URL from './constants'
import { ActionCreatorWithPayload, Dispatch } from '@reduxjs/toolkit'

const addGeneric =
  (
    add: ActionCreatorWithPayload<GW2UiSliceIdentifier>,
    addError: ActionCreatorWithPayload<GW2UiSliceError>,
    name: string,
  ) =>
  (ids: string[], dispatch: Dispatch<any>) => {
    const cleaned = ids
      .filter((id: string) => id !== '')
      .reduce((a: string[], b: string) => {
        if (a.indexOf(b) < 0) a.push(b)
        return a
      }, [])

    // only show native language for chinese people
    const userLang = navigator.language
    const language = userLang.includes('zh') ? 'zh' : 'en'

    axios
      .get(`${BASE_URL}/${name}?ids=${cleaned}&lang=${language}`)
      .then((res) => {
        res.data.forEach((element: GW2UiSliceData) => {
          dispatch(add(element))
        })
        const missing = cleaned.filter(
          (id) =>
            !res.data
              .map((rec: GW2UiSliceData) => Number(rec.id))
              .includes(Number(id)),
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

export const fetchItem = Batcher(addGeneric(addItem, addItemError, 'items'))
export const fetchSpecialization = Batcher(
  addGeneric(addSpecialization, addSpecializationsError, 'specializations'),
)
export const fetchSkill = Batcher(addGeneric(addSkill, addSkillError, 'skills'))
export const fetchTrait = Batcher(addGeneric(addTrait, addTraitError, 'traits'))

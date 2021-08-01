import { abortRequests } from '@redux-requests/core'
import {
  fetchItems,
  fetchSkills,
  fetchSpecializations,
  fetchTraits,
  FETCH_ITEMS,
  FETCH_SKILLS,
  FETCH_SPECIALIZATIONS,
  FETCH_TRAITS,
} from 'gw2-ui-redux'
import React, { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export const forceAPICall = (type, fetcher, pageName, store) => {
  const { gw2UiStore } = store.getState()
  if (Array.isArray(gw2UiStore.ids[type][pageName])) {
    store.dispatch(fetcher(gw2UiStore.ids[type][pageName], pageName))
  }
}

export const withGW2UI = (pageName) => (Component) => {
  const dispatch = useDispatch()
  const store = useStore()

  useEffect(() => {
    forceAPICall('items', fetchItems, pageName, store)
    forceAPICall('skills', fetchSkills, pageName, store)
    forceAPICall('specializations', fetchSpecializations, pageName, store)
    forceAPICall('traits', fetchTraits, pageName, store)

    return () => {
      dispatch(
        abortRequests([
          FETCH_ITEMS,
          { requestType: FETCH_ITEMS, requestKey: pageName },
        ]),
      )
      dispatch(
        abortRequests([
          FETCH_SKILLS,
          { requestType: FETCH_SKILLS, requestKey: pageName },
        ]),
      )
      dispatch(
        abortRequests([
          FETCH_SPECIALIZATIONS,
          { requestType: FETCH_SPECIALIZATIONS, requestKey: pageName },
        ]),
      )
      dispatch(
        abortRequests([
          FETCH_TRAITS,
          { requestType: FETCH_TRAITS, requestKey: pageName },
        ]),
      )
    }
  })

  return (
    <PageContext.Provider value={pageName}>
      <Component />
    </PageContext.Provider>
  )
}

export const PageContext = React.createContext()

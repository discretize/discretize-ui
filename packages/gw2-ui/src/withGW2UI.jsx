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

export const forceAPICall = (type, fetcher, pageName) => {
  const store = window.REDUX_STORE

  const { gw2UiStore } = store.getState()

  if (Array.isArray(gw2UiStore.ids[type][pageName])) {
    store.dispatch(fetcher(gw2UiStore.ids[type][pageName], pageName))
  }
}

export const withGW2UI = (pageName) => (Component) => {
  useEffect(() => {
    forceAPICall('items', fetchItems, pageName)
    forceAPICall('skills', fetchSkills, pageName)
    forceAPICall('specializations', fetchSpecializations, pageName)
    forceAPICall('traits', fetchTraits, pageName)

    return () => {
      const store = window.REDUX_STORE

      store.dispatch(
        abortRequests([
          FETCH_ITEMS,
          { requestType: FETCH_ITEMS, requestKey: pageName },
        ]),
      )
      store.dispatch(
        abortRequests([
          FETCH_SKILLS,
          { requestType: FETCH_SKILLS, requestKey: pageName },
        ]),
      )
      store.dispatch(
        abortRequests([
          FETCH_SPECIALIZATIONS,
          { requestType: FETCH_SPECIALIZATIONS, requestKey: pageName },
        ]),
      )
      store.dispatch(
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

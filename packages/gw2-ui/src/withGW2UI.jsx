import {
  fetchItems,
  fetchSkills,
  fetchSpecializations,
  fetchTraits,
} from 'gw2-ui-redux'
import React, { useEffect } from 'react'

export const forceAPICall = (type, fetcher, pageName) => {
  const store = window.REDUX_STORE

  const { gw2UiStore } = store.getState()

  if (Array.isArray(gw2UiStore[type][pageName])) {
    store.dispatch(fetcher(gw2UiStore[type][pageName], pageName))
  }
}

export const withGW2UI = (pageName) => (Component) => {
  useEffect(() => {
    forceAPICall('items', fetchItems, pageName)
    forceAPICall('skills', fetchSkills, pageName)
    forceAPICall('specializations', fetchSpecializations, pageName)
    forceAPICall('traits', fetchTraits, pageName)
  })

  return (
    <PageContext.Provider value={pageName}>
      <Component />
    </PageContext.Provider>
  )
}

export const PageContext = React.createContext()

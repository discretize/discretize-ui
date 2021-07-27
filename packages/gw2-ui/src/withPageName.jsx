import {
  fetchItems,
  fetchSkills,
  fetchSpecializations,
  fetchTraits,
} from 'gw2-ui-redux'
import React, { useEffect } from 'react'

export const withPageName = (pageName) => (Component) => {
  const store = window.REDUX_STORE

  const dispatcher = (type, fetcher) => {
    const { gw2UiStore } = store.getState()

    if (Array.isArray(gw2UiStore[type][pageName])) {
      store.dispatch(
        fetcher(
          gw2UiStore[type][pageName].map((i) => i.id),
          pageName,
        ),
      )
    }
  }

  useEffect(() => {
    dispatcher('items', fetchItems)
    dispatcher('skills', fetchSkills)
    dispatcher('specializations', fetchSpecializations)
    dispatcher('traits', fetchTraits)
  })

  return (
    <PageContext.Provider value={pageName}>
      <Component />
    </PageContext.Provider>
  )
}

export const PageContext = React.createContext()

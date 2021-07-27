import React, { useEffect } from 'react'
import { fetchItems } from 'gw2-ui-redux'

export const withPageName = (pageName) => (Component) => {
  const store = window.REDUX_STORE
  useEffect(() => {
    const itemsQuery = store
      .getState()
      .gw2UiStore.toQuery[pageName].map((i) => i.id)
      .toString()
    // TODO clean up passing a string here.
    store.dispatch(fetchItems(itemsQuery, pageName))
  })
  return (
    <PageContext.Provider value={pageName}>
      <Component />
    </PageContext.Provider>
  )
}

export const PageContext = React.createContext()

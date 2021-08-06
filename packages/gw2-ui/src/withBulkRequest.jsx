import {
  fetchItems,
  fetchSkills,
  fetchSpecializations,
  fetchTraits,
} from 'gw2-ui-redux-bulk'
import React from 'react'
import { connect } from 'react-redux'

export const forceAPICall = (type, fetcher, pageName, ids, setIds) => {
  if (Array.isArray(ids[type][pageName])) {
    setIds(type, fetcher, pageName, ids)
  }
}

export function withBulkRequest(pageName, WrappedComponent) {
  class Component extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    componentDidMount() {
      const { ids, setIds } = this.state
      forceAPICall('items', fetchItems, pageName, ids, setIds)
      forceAPICall('skills', fetchSkills, pageName, ids, setIds)
      forceAPICall(
        'specializations',
        fetchSpecializations,
        pageName,
        ids,
        setIds,
      )
      forceAPICall('traits', fetchTraits, pageName, ids, setIds)

      return () => {
        /*
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
      */
      }
    }

    render() {
      return (
        <PageContext.Provider value={pageName}>
          <WrappedComponent />
        </PageContext.Provider>
      )
    }
  }

  const mapStateToProps = (state) => {
    console.log(state.ids)
    return {
      ids: state.ids,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      setIds: (type, fetcher, page, idss) =>
        dispatch(fetcher(idss[type][page], page)),
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Component)
}

export const PageContext = React.createContext()

import { Query } from '@redux-requests/react'
import { Trait as TraitComponent, useThemeUI } from 'gw2-ui-components'
import { addTrait, fetchTrait, FETCH_TRAITS, FETCH_TRAIT } from 'gw2-ui-redux'
import React, { useEffect } from 'react'
import { abortRequests } from '@redux-requests/core'
import { useDispatch } from 'react-redux'
import { PageContext } from '../withGW2UI'

const Trait = ({ id, ...rest }) => {
  const context = useThemeUI()
  const { theme } = context

  let requestKey
  const useBulk = theme.useBulkRequests

  if (useBulk) {
    requestKey = `${React.useContext(PageContext)}`
  } else {
    requestKey = `${id}`
  }
  const dispatch = useDispatch()

  useEffect(() => {
    if (useBulk) {
      dispatch(addTrait({ id, page: requestKey }))
      return () => {}
    }
    dispatch(fetchTrait(requestKey))
    return () => {
      dispatch(
        abortRequests([FETCH_TRAIT, { requestType: FETCH_TRAIT, requestKey }]),
      )
    }
  }, [dispatch, requestKey])

  return (
    <Query
      type={useBulk ? FETCH_TRAITS : FETCH_TRAIT}
      requestKey={requestKey}
      loadingComponent={TraitComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={TraitComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => (
        <TraitComponent
          data={useBulk ? data.find((d) => Number(d.id) === Number(id)) : data}
          error={error}
          loading={loading}
          {...rest}
        />
      )}
    </Query>
  )
}

export default Trait

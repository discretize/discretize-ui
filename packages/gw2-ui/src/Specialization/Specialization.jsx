import { Query } from '@redux-requests/react'
import {
  Specialization as SpecializationComponent,
  useThemeUI,
} from 'gw2-ui-components-bulk'
import {
  addSpecialization,
  FETCH_SPECIALIZATIONS,
  FETCH_SPECIALIZATION,
  fetchSpecialization,
} from 'gw2-ui-redux-bulk'
import { abortRequests } from '@redux-requests/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { PageContext } from '../withBulkRequest'

const Specialization = ({ id, ...rest }) => {
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
      dispatch(addSpecialization({ id, page: requestKey }))
      return () => {}
    }
    dispatch(fetchSpecialization(requestKey))
    return () => {
      dispatch(
        abortRequests([
          FETCH_SPECIALIZATION,
          { requestType: FETCH_SPECIALIZATION, requestKey },
        ]),
      )
    }
  }, [dispatch, requestKey])

  return (
    <Query
      type={useBulk ? FETCH_SPECIALIZATIONS : FETCH_SPECIALIZATION}
      requestKey={requestKey}
      loadingComponent={SpecializationComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={SpecializationComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => (
        <SpecializationComponent
          data={useBulk ? data.find((d) => Number(d.id) === Number(id)) : data}
          error={error}
          loading={loading}
          {...rest}
        />
      )}
    </Query>
  )
}

export default Specialization

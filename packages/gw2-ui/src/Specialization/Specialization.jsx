import { abortRequests } from '@redux-requests/core'
import { Query } from '@redux-requests/react'
import { Specialization as SpecializationComponent } from 'gw2-ui-components'
import { fetchSpecialization, FETCH_SPECIALIZATION } from 'gw2-ui-redux'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Specialization = ({ id, ...rest }) => {
  const requestKey = `${id}`

  const dispatch = useDispatch()

  useEffect(() => {
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
      type={FETCH_SPECIALIZATION}
      requestKey={requestKey}
      loadingComponent={SpecializationComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={SpecializationComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => (
        <SpecializationComponent
          data={data}
          error={error}
          loading={loading}
          {...rest}
        />
      )}
    </Query>
  )
}

export default Specialization

import { abortRequests } from '@redux-requests/core'
import { useQuery } from '@redux-requests/react'
import { Specialization as SpecializationComponent } from 'gw2-ui-components'
import { FETCH_SPECIALIZATIONS } from 'gw2-ui-redux'
import { addSpecialization } from 'gw2-ui-redux/src/gw2-ui-slice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { PageContext } from '../withGW2UI'

const Specialization = ({ id, ...rest }) => {
  const requestKey = `${id}`

  // context for the current opened page
  const page = React.useContext(PageContext)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addSpecialization({ id, page }))

    return () => {
      dispatch(
        abortRequests([
          FETCH_SPECIALIZATIONS,
          { requestType: FETCH_SPECIALIZATIONS, requestKey },
        ]),
      )
    }
  }, [dispatch, requestKey])

  const { data, error, loading } = useQuery({
    type: FETCH_SPECIALIZATIONS,
    requestKey: page,
  })
  return (
    <SpecializationComponent
      data={data && data.find((d) => d.id === id)}
      error={error}
      loading={loading}
      {...rest}
    />
  )
  /*
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
  ) */
}

export default Specialization

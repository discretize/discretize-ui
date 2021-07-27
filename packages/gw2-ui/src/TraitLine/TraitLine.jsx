import { abortRequests } from '@redux-requests/core'
import { useQuery } from '@redux-requests/react'
import { TraitLine as TraitLineComponent } from 'gw2-ui-components'
import {
  addSpecialization,
  FETCH_SPECIALIZATIONS,
  fetchTraits,
} from 'gw2-ui-redux'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Trait from '../Trait'
import { forceAPICall, PageContext } from '../withPageName'

const TraitLine = ({ id, ...rest }) => {
  const requestKey = `${id}`

  // context for the current opened page
  const page = React.useContext(PageContext)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addSpecialization({ id: requestKey, page }))

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
    <TraitLineComponent
      data={data && data.filter((d) => d.id === Number(requestKey))[0]}
      error={error}
      loading={loading}
      traitComponent={Trait}
      forceAPICall={() => forceAPICall('traits', fetchTraits, page)} // The parent is not aware of the individual traits later (for some reason). By forcing the call then we fetch the traits
      {...rest}
    />
  )
  /*
  return (
    <Query
      type={FETCH_SPECIALIZATIONS}
      requestKey={requestKey}
      loadingComponent={TraitLineComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={TraitLineComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => (
        <TraitLineComponent
          data={data}
          error={error}
          loading={loading}
          traitComponent={Trait}
          {...rest}
        />
      )}
    </Query>
  )
  */
}

export default TraitLine

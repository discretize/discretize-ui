import { useQuery } from '@redux-requests/react'
import { TraitLine as TraitLineComponent } from 'gw2-ui-components'
import { addSpecialization, fetchTraits } from 'gw2-ui-redux'
import { FETCH_TRAITS } from 'gw2-ui-redux/src'
import { getSpecializationsFromStore } from 'gw2-ui-redux/src/gw2-ui-slice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Trait from '../Trait'
import { forceAPICall, PageContext } from '../withGW2UI'

const TraitLine = ({ id, ...rest }) => {
  const requestKey = `${id}`

  // context for the current opened page
  const page = React.useContext(PageContext)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addSpecialization({ id: requestKey, page }))
  }, [dispatch, requestKey])

  let data = null
  let error
  let loading
  let dataRaw = useSelector(getSpecializationsFromStore([Number(id)]))

  // search the dataStore if the data is already available.
  data = dataRaw.find((d) => Number(d.id) === Number(id))

  // this query is only being used, in case the data was not found in the store ( data is undefined).
  const { data: dataQ, error: errorQ, loading: loadingQ } = useQuery({
    type: FETCH_TRAITS,
    requestKey: page,
  })
  // assign the found properties, so that our items starts to load
  if (!data) {
    dataRaw = dataQ
    error = errorQ
    loading = loadingQ
  }

  return (
    <TraitLineComponent
      data={data}
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

import { useQuery } from '@redux-requests/react'
import { Specialization as SpecializationComponent } from 'gw2-ui-components'
import { FETCH_SPECIALIZATIONS } from 'gw2-ui-redux'
import {
  addSpecialization,
  getSpecializationsFromStore,
} from 'gw2-ui-redux/src/gw2-ui-slice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageContext } from '../withGW2UI'

const Specialization = ({ id, ...rest }) => {
  const requestKey = `${id}`

  // context for the current opened page
  const page = React.useContext(PageContext)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addSpecialization({ id, page }))
  }, [dispatch, requestKey])

  let data = null
  let error
  let loading
  let dataRaw = useSelector(getSpecializationsFromStore([Number(id)]))

  // search the dataStore if the data is already available.
  data = dataRaw.find((d) => Number(d.id) === Number(id))

  // this query is only being used, in case the data was not found in the store ( data is undefined).
  const { data: dataQ, error: errorQ, loading: loadingQ } = useQuery({
    type: FETCH_SPECIALIZATIONS,
    requestKey: page,
  })
  // assign the found properties, so that our items starts to load
  if (!data) {
    dataRaw = dataQ
    error = errorQ
    loading = loadingQ
  }

  return (
    <SpecializationComponent
      data={data}
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

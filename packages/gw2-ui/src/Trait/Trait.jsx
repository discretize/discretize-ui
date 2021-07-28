import { abortRequests } from '@redux-requests/core'
import { useQuery } from '@redux-requests/react'
import { Trait as TraitComponent } from 'gw2-ui-components'
import { addTrait, FETCH_TRAITS } from 'gw2-ui-redux'
import { getTraitsFromStore } from 'gw2-ui-redux/src/gw2-ui-slice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageContext } from '../withGW2UI'

const Trait = ({ id, ...rest }) => {
  const requestKey = `${id}`

  // context for the current opened page
  const page = React.useContext(PageContext)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addTrait({ id, page }))

    return () => {
      dispatch(
        abortRequests([
          FETCH_TRAITS,
          { requestType: FETCH_TRAITS, requestKey },
        ]),
      )
    }
  }, [dispatch, requestKey])

  let data = null
  let error
  let loading
  let dataRaw = useSelector(getTraitsFromStore([Number(id)]))

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
    <TraitComponent data={data} error={error} loading={loading} {...rest} />
  )

  /*
  return (
    <Query
      type={FETCH_TRAIT}
      requestKey={requestKey}
      loadingComponent={TraitComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={TraitComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => (
        <TraitComponent data={data} error={error} loading={loading} {...rest} />
      )}
    </Query>
  )
  */
}

export default Trait

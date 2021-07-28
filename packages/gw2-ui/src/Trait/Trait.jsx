import { abortRequests } from '@redux-requests/core'
import { useQuery } from '@redux-requests/react'
import { Trait as TraitComponent } from 'gw2-ui-components'
import { addTrait, FETCH_TRAITS } from 'gw2-ui-redux'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
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

  const { data, error, loading } = useQuery({
    type: FETCH_TRAITS,
    requestKey: page,
  })

  return (
    <TraitComponent
      data={data && data.find((d) => d.id === id)}
      error={error}
      loading={loading}
      {...rest}
    />
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

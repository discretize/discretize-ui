import { Query } from '@redux-requests/react'
import { Trait as TraitComponent } from 'gw2-ui-components'
import { addTrait, FETCH_TRAITS } from 'gw2-ui-redux'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { PageContext } from '../withGW2UI'

const Trait = ({ id, ...rest }) => {
  // context for the current opened page
  const page = React.useContext(PageContext)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addTrait({ id, page }))
  }, [dispatch, id])

  return (
    <Query
      type={FETCH_TRAITS}
      requestKey={page}
      loadingComponent={TraitComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={TraitComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => (
        <TraitComponent
          data={data.find((d) => Number(d.id) === Number(id))}
          error={error}
          loading={loading}
          {...rest}
        />
      )}
    </Query>
  )
}

export default Trait

import { Query } from '@redux-requests/react'
import { TraitLine as TraitLineComponent } from 'gw2-ui-components-bulk'
import {
  addSpecialization,
  fetchTraits,
  FETCH_SPECIALIZATIONS,
} from 'gw2-ui-redux-bulk'
import React, { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import Trait from '../Trait'
import { forceAPICall, PageContext } from '../withBulkRequest'

const TraitLine = ({ id, ...rest }) => {
  // context for the current opened page
  const page = React.useContext(PageContext)

  const dispatch = useDispatch()
  const store = useStore()

  useEffect(() => {
    dispatch(addSpecialization({ id, page }))
  }, [dispatch, id])

  return (
    <Query
      type={FETCH_SPECIALIZATIONS}
      requestKey={page}
      loadingComponent={TraitLineComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={TraitLineComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => (
        <TraitLineComponent
          data={data.find((d) => Number(d.id) === Number(id))}
          error={error}
          loading={loading}
          traitComponent={Trait}
          forceAPICall={() => forceAPICall('traits', fetchTraits, page, store)}
          {...rest}
        />
      )}
    </Query>
  )
}

export default TraitLine

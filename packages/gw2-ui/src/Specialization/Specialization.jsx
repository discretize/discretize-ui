import { Query } from '@redux-requests/react'
import { Specialization as SpecializationComponent } from 'gw2-ui-components'
import { addSpecialization, FETCH_SPECIALIZATIONS } from 'gw2-ui-redux'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { PageContext } from '../withGW2UI'

const Specialization = ({ id, ...rest }) => {
  // context for the current opened page
  const page = React.useContext(PageContext)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addSpecialization({ id, page }))
  }, [dispatch, id])

  return (
    <Query
      type={FETCH_SPECIALIZATIONS}
      requestKey={page}
      loadingComponent={SpecializationComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={SpecializationComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => (
        <SpecializationComponent
          data={data.find((d) => Number(d.id) === Number(id))}
          error={error}
          loading={loading}
          {...rest}
        />
      )}
    </Query>
  )
}

export default Specialization

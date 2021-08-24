import {
  Specialization as SpecializationComponent,
  isLoading,
} from 'gw2-ui-components-bulk'
import { fetchSpecialization } from 'gw2-ui-redux-bulk'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Specialization = ({ id, ...rest }) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.gw2UiStore.ids.specializations.find(
      (item) => Number(item.id) === Number(id),
    )
  })
  const error = useSelector((state) => {
    return state.gw2UiStore.errors.specializations.find(
      (item) => Number(item.id) === Number(id),
    )
  })
  const loading = isLoading(data, error)

  useEffect(() => {
    fetchSpecialization(id, dispatch)
    return () => {}
  }, [dispatch, id])

  return (
    <SpecializationComponent
      data={data}
      error={error}
      loading={Boolean(loading)}
      {...rest}
    />
  )
}

export default Specialization

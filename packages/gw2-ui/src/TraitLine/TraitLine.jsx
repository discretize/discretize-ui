import { TraitLine as TraitLineComponent } from 'gw2-ui-components-bulk'
import { fetchSpecialization } from 'gw2-ui-redux-bulk'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Trait from '../Trait'

const TraitLine = ({ id, ...rest }) => {
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
  const loading = id && !data && !error

  useEffect(() => {
    if (id) fetchSpecialization(id, dispatch)
  }, [dispatch])

  return (
    <TraitLineComponent
      data={data}
      error={error}
      loading={loading}
      traitComponent={Trait}
      {...rest}
    />
  )
}

export default TraitLine

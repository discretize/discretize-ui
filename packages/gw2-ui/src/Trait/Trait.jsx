import { Trait as TraitComponent } from 'gw2-ui-components-bulk'
import { fetchTrait } from 'gw2-ui-redux-bulk'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Trait = ({ id, ...rest }) => {
  const dispatch = useDispatch()

  const data = useSelector((state) => {
    return state.gw2UiStore.ids.traits.find(
      (item) => Number(item.id) === Number(id),
    )
  })
  const error = useSelector((state) => {
    return state.gw2UiStore.errors.traits.find(
      (item) => Number(item.id) === Number(id),
    )
  })
  const loading = id && !data && !error

  useEffect(() => {
    if (id) fetchTrait(id, dispatch)
    return () => {}
  }, [dispatch, id])

  return (
    <TraitComponent
      data={data}
      error={error}
      loading={Boolean(loading)}
      {...rest}
    />
  )
}

export default Trait

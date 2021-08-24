import { Skill as SkillComponent, isLoading } from 'gw2-ui-components-bulk'
import { fetchSkill } from 'gw2-ui-redux-bulk'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Skill = ({ id, ...rest }) => {
  const dispatch = useDispatch()

  const data = useSelector((state) => {
    return state.gw2UiStore.ids.skills.find(
      (item) => Number(item.id) === Number(id),
    )
  })
  const error = useSelector((state) => {
    return state.gw2UiStore.errors.skills.find(
      (item) => Number(item.id) === Number(id),
    )
  })
  const loading = isLoading(data, error)

  useEffect(() => {
    fetchSkill(id, dispatch)
    return () => {}
  }, [dispatch, id])

  return (
    <SkillComponent
      data={data}
      error={error}
      loading={Boolean(loading)}
      {...rest}
    />
  )
}

export default Skill

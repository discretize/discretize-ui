import { Skill as SkillComponent } from 'gw2-ui-components-bulk'
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
  const loading = !data && !error

  useEffect(() => {
    fetchSkill(id, dispatch)
    return () => {}
  }, [dispatch, id])

  return (
    <SkillComponent data={data} error={error} loading={loading} {...rest} />
  )
}

export default Skill

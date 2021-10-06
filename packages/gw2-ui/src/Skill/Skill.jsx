import { Skill as SkillComponent, MissingSkill } from 'gw2-ui-components-bulk'
import { fetchSkill } from 'gw2-ui-redux-bulk'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Skill = ({ data: apiData, id, missing, ...rest }) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    if (apiData) return apiData
    if (missing) return null
    // only query api if there is no apiData provided via props
    return state.gw2UiStore.ids.skills.find(
      (item) => Number(item.id) === Number(id),
    )
  })
  const error = useSelector((state) => {
    if (apiData || missing) return null
    return state.gw2UiStore.errors.skills.find(
      (item) => Number(item.id) === Number(id),
    )
  })
  const loading = !data && !error

  useEffect(() => {
    // only query api if there is no apiData provided via props
    if (!data && !missing) fetchSkill(id, dispatch)
    return () => {}
  }, [dispatch, id])

  if (missing) return <MissingSkill {...rest} />

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

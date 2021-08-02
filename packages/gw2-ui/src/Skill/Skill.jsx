import { Query } from '@redux-requests/react'
import { Skill as SkillComponent, useThemeUI } from 'gw2-ui-components-bulk'
import {
  addSkill,
  FETCH_SKILLS,
  FETCH_SKILL,
  fetchSkill,
} from 'gw2-ui-redux-bulk'
import React, { useEffect } from 'react'
import { abortRequests } from '@redux-requests/core'
import { useDispatch } from 'react-redux'
import { PageContext } from '../withBulkRequest'

const Skill = ({ id, ...rest }) => {
  const context = useThemeUI()
  const { theme } = context

  let requestKey
  const useBulk = theme.useBulkRequests

  if (useBulk) {
    requestKey = `${React.useContext(PageContext)}`
  } else {
    requestKey = `${id}`
  }

  const dispatch = useDispatch()

  useEffect(() => {
    if (useBulk) {
      dispatch(addSkill({ id, page: requestKey }))
      return () => {}
    }
    dispatch(fetchSkill(requestKey))
    return () => {
      dispatch(
        abortRequests([FETCH_SKILL, { requestType: FETCH_SKILL, requestKey }]),
      )
    }
  }, [dispatch, requestKey])

  return (
    <Query
      type={useBulk ? FETCH_SKILLS : FETCH_SKILL}
      requestKey={requestKey}
      loadingComponent={SkillComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={SkillComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => {
        return (
          <SkillComponent
            data={
              useBulk ? data.find((d) => Number(d.id) === Number(id)) : data
            }
            error={error}
            loading={loading}
            {...rest}
          />
        )
      }}
    </Query>
  )
}

export default Skill

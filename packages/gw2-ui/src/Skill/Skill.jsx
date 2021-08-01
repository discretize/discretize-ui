import { Query } from '@redux-requests/react'
import { Skill as SkillComponent } from 'gw2-ui-components'
import { addSkill, FETCH_SKILLS, FETCH_SKILL, fetchSkill } from 'gw2-ui-redux'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { PageContext } from '../withGW2UI'

const Skill = ({ id, ...rest }) => {
  // context for the current opened page
  let requestKey
  const legacy = false

  if (legacy) {
    requestKey = `${id}`
  } else {
    requestKey = `${React.useContext(PageContext)}`
  }

  const dispatch = useDispatch()

  useEffect(() => {
    if (legacy) {
      dispatch(fetchSkill(requestKey))
    } else {
      dispatch(addSkill({ id, page: requestKey }))
    }
  }, [dispatch, requestKey])

  return (
    <Query
      type={legacy ? FETCH_SKILL : FETCH_SKILLS}
      requestKey={requestKey}
      loadingComponent={SkillComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={SkillComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => {
        return (
          <SkillComponent
            data={legacy ? data : data.find((d) => Number(d.id) === Number(id))}
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

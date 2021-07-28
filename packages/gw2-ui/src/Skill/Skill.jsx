import { abortRequests } from '@redux-requests/core'
import { useQuery } from '@redux-requests/react'
import { Skill as SkillComponent } from 'gw2-ui-components'
import { addSkill, FETCH_SKILLS } from 'gw2-ui-redux'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { PageContext } from '../withGW2UI'

const Skill = ({ id, ...rest }) => {
  const requestKey = `${id}`

  // context for the current opened page
  const page = React.useContext(PageContext)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addSkill({ id: requestKey, page }))

    return () => {
      dispatch(
        abortRequests([
          FETCH_SKILLS,
          { requestType: FETCH_SKILLS, requestKey },
        ]),
      )
    }
  }, [dispatch, requestKey])

  const { data, error, loading } = useQuery({
    type: FETCH_SKILLS,
    requestKey: page,
  })

  return (
    <SkillComponent
      data={data && data.filter((d) => d.id === Number(requestKey))[0]}
      error={error}
      loading={loading}
      {...rest}
    />
  )
  /*
  return (
    <Query
      type={FETCH_SKILLS}
      requestKey={requestKey}
      loadingComponent={SkillComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={SkillComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => {
        console.log(data)
        return (
          <SkillComponent
            data={data.filter((d) => d.id === requestKey)[0]}
            error={error}
            loading={loading}
            {...rest}
          />
        )
      }}
    </Query>
  ) */
}

export default Skill

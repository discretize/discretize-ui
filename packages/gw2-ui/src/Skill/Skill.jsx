import { useQuery } from '@redux-requests/react'
import { Skill as SkillComponent } from 'gw2-ui-components'
import { addSkill, FETCH_SKILLS } from 'gw2-ui-redux'
import { getSkillsFromStore } from 'gw2-ui-redux/src/gw2-ui-slice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageContext } from '../withGW2UI'

const Skill = ({ id, ...rest }) => {
  const requestKey = `${id}`

  // context for the current opened page
  const page = React.useContext(PageContext)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addSkill({ id, page }))
  }, [dispatch, requestKey])

  let data = null
  let error
  let loading
  let dataRaw = useSelector(getSkillsFromStore([Number(id)]))

  // search the dataStore if the data is already available.
  data = dataRaw.find((d) => Number(d.id) === Number(id))

  // this query is only being used, in case the data was not found in the store ( data is undefined).
  const { data: dataQ, error: errorQ, loading: loadingQ } = useQuery({
    type: FETCH_SKILLS,
    requestKey: page,
  })
  // assign the found properties, so that our items starts to load
  if (!data) {
    dataRaw = dataQ
    error = errorQ
    loading = loadingQ
  }

  return (
    <SkillComponent data={data} error={error} loading={loading} {...rest} />
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
            data={data.find((d) => d.id === id)}
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

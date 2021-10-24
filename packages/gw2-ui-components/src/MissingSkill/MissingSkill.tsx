import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

import Skill from '../Skill/Skill'
import axios from 'axios'

const normalize = (str: string) =>
  str === undefined
    ? str
    : str
        .replace(/[^A-Za-z]/g, '')
        .toLowerCase()
        .trim()

export interface MissingSkillProps {
  name: string
}

/**
 * Wrapper around skill, which fetches from the discretize-gw2api repo json files for skills, that are not included in the gw2 api.
 */
const MissingSkill = ({ name }: MissingSkillProps): ReactElement => {
  const [state, setState] = React.useState({})

  const { CancelToken } = axios
  const source = CancelToken.source()

  React.useEffect(() => {
    axios
      .get(
        `https://discretize.github.io/discretize-gw2api/api/skills/${normalize(
          name,
        )}.json`,
        { cancelToken: source.token },
      )
      .catch(() => {})
      .then((res) => {
        setState(res.data)
      })

    return () => {
      source.cancel(`Operation cancelled for fetching item with id ${name}`)
    }
  }, [])

  return <Skill data={state} />
}

export default MissingSkill

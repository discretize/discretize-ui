import React, { ReactElement } from 'react'

import Effect from '../Effect/Effect'

import conditions from '../data/conditions.json'

export interface ConditionProps {
  name: string
  count: number
}

const Condition = ({ name, count }: ConditionProps): ReactElement => {
  return (
    <Effect
      type="Condition"
      name={name}
      description={conditions[name]}
      iconProps={{ applyCount: count }}
    />
  )
}

export default Condition

import React, { ReactElement } from 'react'

import Effect from '../Effect/Effect'

import boons from '../data/boons.json'

export interface BoonProps {
  name: string
  count: number
}

const Boon = ({ name, count }: BoonProps): ReactElement => {
  return (
    <Effect
      type="Boon"
      name={name}
      description={boons[name]}
      iconProps={{ applyCount: count }}
    />
  )
}

export default Boon

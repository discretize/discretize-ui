import React, { forwardRef, ReactElement } from 'react'
import PropTypes from 'prop-types'

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
      iconProps={{ applyCount: count, ...rest.iconProps }}
    />
  )
}

export default Boon

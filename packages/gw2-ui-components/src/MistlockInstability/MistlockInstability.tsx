import React, { forwardRef, ReactElement } from 'react'
import PropTypes from 'prop-types'

import Effect from '../Effect/Effect'

import mistlockInstabilities from '../data/mistlockInstabilities.json'

export interface MistlockInstabilityProps {
  name: string
}

const MistlockInstability = ({
  name,
}: MistlockInstabilityProps): ReactElement => {
  return (
    <Effect
      type="Mistlock Instability"
      name={name}
      displayName={`Mistlock Instability: ${name}`}
      description={mistlockInstabilities[name]}
    />
  )
}

export default MistlockInstability

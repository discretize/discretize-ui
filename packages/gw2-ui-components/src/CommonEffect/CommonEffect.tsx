import React, { forwardRef, ReactElement } from 'react'
import PropTypes from 'prop-types'

import Effect from '../Effect/Effect'

import commonEffects from '../data/commonEffects.json'

export interface CommonEffectProps {
  name: string
}

const CommonEffect = ({
  
}: CommonEffectProps): ReactElement => {
  const name =
    propsName === 'Mistlock Singularity' ? 'Rigorous Certainty' : propsName

  return (
    <Effect
      type="Common"
      name={name}
      description={commonEffects[name]}
    />
  )
})

export default CommonEffect

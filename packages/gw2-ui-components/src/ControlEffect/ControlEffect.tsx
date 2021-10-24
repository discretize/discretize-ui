import React, { ReactElement } from 'react'

import Effect from '../Effect/Effect'

import controlEffects from '../data/controlEffects.json'

export interface ControlEffectProps {
  name: string
}

const ControlEffect = ({ name }: ControlEffectProps): ReactElement => {
  return (
    <Effect type="Control" name={name} description={controlEffects[name]} />
  )
}

export default ControlEffect

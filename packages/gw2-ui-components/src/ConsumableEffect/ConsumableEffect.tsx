import React, { ReactElement } from 'react'

import Effect from '../Effect/Effect'

import consumableEffects from '../data/consumableEffects.json'

export interface ConsumableEffectProps {
  name: string
}

const ConsumableEffect = ({ name }: ConsumableEffectProps): ReactElement => {
  return (
    <Effect
      type="Consumable"
      name={name}
      description={consumableEffects[name]}
    />
  )
}

export default ConsumableEffect

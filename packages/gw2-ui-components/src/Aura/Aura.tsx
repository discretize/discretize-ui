import React, { ReactElement } from 'react'

import Effect from '../Effect/Effect'

import auras from '../data/auras.json'

export interface AuraProps {
  name: string
}

const Aura = (): ReactElement => {
  return (
    <Effect
      type="Aura"
      name={name}
      displayName={`${name} Aura`}
      description={auras[name]}
    />
  )
}

export default Aura

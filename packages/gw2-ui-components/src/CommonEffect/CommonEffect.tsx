import React, { ReactElement } from 'react'

import Effect from '../Effect/Effect'

import commonEffects from '../data/commonEffects.json'

export interface CommonEffectProps {
  name: string
}

const CommonEffect = ({ name: propsName }: CommonEffectProps): ReactElement => {
  const name =
    propsName === 'Mistlock Singularity' ? 'Rigorous Certainty' : propsName

  return <Effect type="Common" name={name} description={commonEffects[name]} />
}

export default CommonEffect

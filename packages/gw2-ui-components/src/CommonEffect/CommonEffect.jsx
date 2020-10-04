import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Effect from '../Effect'

import commonEffects from '../data/commonEffects.json'

const CommonEffect = forwardRef(({ name: propsName, ...rest }, ref) => {
  const name =
    propsName === 'Mistlock Singularity' ? 'Rigorous Certainty' : propsName

  return (
    <Effect
      type="Common"
      name={name}
      description={commonEffects[name]}
      {...rest}
      ref={ref}
    />
  )
})

CommonEffect.propTypes = {
  name: PropTypes.oneOf(Object.keys(commonEffects)).isRequired,
}

CommonEffect.displayName = 'CommonEffect'

export default CommonEffect

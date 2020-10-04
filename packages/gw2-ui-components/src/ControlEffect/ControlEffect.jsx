import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Effect from '../Effect'

import controlEffects from '../data/controlEffects.json'

const ControlEffect = forwardRef(({ name, ...rest }, ref) => (
  <Effect
    type="Control"
    name={name}
    description={controlEffects[name]}
    {...rest}
    ref={ref}
  />
))

ControlEffect.propTypes = {
  name: PropTypes.oneOf(Object.keys(controlEffects)).isRequired,
}

ControlEffect.displayName = 'ControlEffect'

export default ControlEffect

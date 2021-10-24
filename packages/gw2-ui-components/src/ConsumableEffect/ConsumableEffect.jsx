import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Effect from '../Effect/Effect'

import consumableEffects from '../data/consumableEffects.json'

const ConsumableEffect = forwardRef(({ name, ...rest }, ref) => (
  <Effect
    type="Consumable"
    name={name}
    description={consumableEffects[name]}
    {...rest}
    ref={ref}
  />
))

ConsumableEffect.propTypes = {
  name: PropTypes.oneOf(Object.keys(consumableEffects)).isRequired,
}

ConsumableEffect.displayName = 'ConsumableEffect'

export default ConsumableEffect

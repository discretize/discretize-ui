import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Effect from '../Effect/Effect'

import boons from '../data/boons.json'

const Boon = forwardRef(({ name, count, ...rest }, ref) => (
  <Effect
    type="Boon"
    name={name}
    description={boons[name]}
    {...rest}
    iconProps={{ applyCount: count, ...rest.iconProps }}
    ref={ref}
  />
))

Boon.propTypes = {
  name: PropTypes.oneOf(Object.keys(boons)).isRequired,
  count: PropTypes.number,
}

Boon.defaultProps = {
  count: null,
}

Boon.displayName = 'Boon'

export default Boon

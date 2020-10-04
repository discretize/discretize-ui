import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Effect from '../Effect'

import mistlockInstabilities from '../data/mistlockInstabilities.json'

const MistlockInstability = forwardRef(({ name, ...rest }, ref) => (
  <Effect
    type="Mistlock Instability"
    name={name}
    displayName={`Mistlock Instability: ${name}`}
    description={mistlockInstabilities[name]}
    {...rest}
    ref={ref}
  />
))

MistlockInstability.propTypes = {
  name: PropTypes.oneOf(Object.keys(mistlockInstabilities)).isRequired,
}

MistlockInstability.displayName = 'MistlockInstability'

export default MistlockInstability

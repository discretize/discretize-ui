import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { keyframes } from '@emotion/core'

const spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})

const Spinner = forwardRef(({ component: Component, inline, ...rest }, ref) => (
  <Component
    sx={{
      display: 'inline-flex',
      size: `1em`,
      border: `4px rgba(0,0,0,0.2) solid`,
      borderTopColor: `currentColor`,
      borderRadius: '50%',
      animation: `${spin.toString()} .8s linear infinite`,
      boxSizing: 'border-box',
      ...(inline && { verticalAlign: 'text-top' }),
    }}
    {...rest}
    ref={ref}
  />
))

Spinner.propTypes = {
  component: PropTypes.elementType,
  inline: PropTypes.bool,
}

Spinner.defaultProps = {
  component: 'span',
  inline: true,
}

Spinner.displayName = 'Spinner'

export default Spinner

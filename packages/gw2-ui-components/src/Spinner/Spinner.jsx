import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/core';

const spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

const Spinner = forwardRef(({ component: Component, ...rest }, ref) => (
  <Component
    sx={{
      display: 'inline-block',
      size: `calc(1em - ${2 * 4}px)`,
      border: `4px rgba(0,0,0,0.2) solid`,
      borderTopColor: `currentColor`,
      borderRadius: '50%',
      animation: `${spin.toString()} .8s linear infinite`,
    }}
    {...rest}
    ref={ref}
  />
));

Spinner.propTypes = {
  component: PropTypes.elementType,
};

Spinner.defaultProps = {
  component: 'span',
};

Spinner.displayName = 'Spinner';

export default Spinner;

import React, { forwardRef, ReactElement } from 'react';

import { keyframes } from '@emotion/core';

const spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

export interface SpinnerProps {
  component: object;
  inline: boolean;
}

const Spinner = ({ component, inline }: SpinnerProps): ReactElement => (
  <div
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
  />
);

export default Spinner;

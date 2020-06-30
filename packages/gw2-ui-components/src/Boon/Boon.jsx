import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Effect from '../Effect';

import boons from '../data/boons.json';

const Boon = forwardRef(({ name, ...rest }, ref) => (
  <Effect
    type="Boon"
    name={name}
    description={boons[name]}
    {...rest}
    ref={ref}
  />
));

Boon.propTypes = {
  name: PropTypes.oneOf(Object.keys(boons)).isRequired,
};

Boon.displayName = 'Boon';

export default Boon;

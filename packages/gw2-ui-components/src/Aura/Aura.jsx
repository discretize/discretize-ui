import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Effect from '../Effect';

import auras from '../data/auras.json';

const Aura = forwardRef(({ name, ...rest }, ref) => (
  <Effect
    type="Aura"
    name={name}
    description={auras[name]}
    {...rest}
    ref={ref}
  />
));

Aura.propTypes = {
  name: PropTypes.oneOf(Object.keys(auras)).isRequired,
};

Aura.displayName = 'Aura';

export default Aura;

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Effect from '../Effect';

import conditions from '../data/conditions.json';

const Condition = forwardRef(({ name, ...rest }, ref) => (
  <Effect
    type="Condition"
    name={name}
    description={conditions[name]}
    {...rest}
    ref={ref}
  />
));

Condition.propTypes = {
  name: PropTypes.oneOf(Object.keys(conditions)).isRequired,
};

Condition.displayName = 'Condition';

export default Condition;

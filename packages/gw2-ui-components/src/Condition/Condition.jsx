import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Effect from '../Effect';

import conditions from '../data/conditions.json';

const Condition = forwardRef(({ name, count, ...rest }, ref) => (
  <Effect
    type="Condition"
    name={name}
    description={conditions[name]}
    {...rest}
    iconProps={{ applyCount: count, ...rest.iconProps }}
    ref={ref}
  />
));

Condition.propTypes = {
  name: PropTypes.oneOf(Object.keys(conditions)).isRequired,
  count: PropTypes.number,
};

Condition.defaultProps = {
  count: null,
};

Condition.displayName = 'Condition';

export default Condition;

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Effect from '../Effect';

import augmentations from '../data/augmentations.json';

const Augmentation = forwardRef(({ name, ...rest }, ref) => (
  <Effect
    type="Augmentation"
    name={name}
    description={augmentations[name]}
    {...rest}
    ref={ref}
  />
));

Augmentation.propTypes = {
  name: PropTypes.oneOf(Object.keys(augmentations)).isRequired,
};

Augmentation.displayName = 'Augmentation';

export default Augmentation;

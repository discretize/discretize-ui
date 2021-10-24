import React, { forwardRef, ReactElement } from 'react'
import PropTypes from 'prop-types'

import Effect from '../Effect/Effect'

import augmentations from '../data/augmentations.json'

export interface AugmentationProps {
  name: string
}

const Augmentation = ({ name }: AugmentationProps): ReactElement => {
  return (
    <Effect type="Augmentation" name={name} description={augmentations[name]} />
  )
}

export default Augmentation

import React, { CSSProperties, ReactElement } from 'react';
import augmentations, { AugmentationsTypes } from '../../data/augmentations';
import Effect from '../Effect/Effect';

export interface AugmentationProps {
  name: AugmentationsTypes;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Augmentation = ({
  name,
  disableTooltip,
  disableText,
  disableLink,
  disableIcon,
  className,
  style,
}: AugmentationProps): ReactElement => {
  return (
    <Effect
      type="Augmentation"
      name={name}
      description={augmentations[name]}
      disableTooltip={disableTooltip}
      disableText={disableText}
      disableLink={disableLink}
      disableIcon={disableIcon}
      className={className}
      style={style}
    />
  );
};

export default Augmentation;

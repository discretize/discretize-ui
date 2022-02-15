import React, { CSSProperties, ReactElement } from 'react';

import Effect from '../Effect/Effect';

import controlEffects from '../../data/controlEffects';
import { ControlEffectTypes } from '../../data/controlEffects';

export interface ControlEffectProps {
  name: ControlEffectTypes;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
}

const ControlEffect = ({
  name,
  disableTooltip,
  disableText,
  disableLink,
  disableIcon,
  className,
  style,
}: ControlEffectProps): ReactElement => {
  return (
    <Effect
      type="Control"
      name={name}
      description={controlEffects[name]}
      disableTooltip={disableTooltip}
      disableText={disableText}
      disableLink={disableLink}
      disableIcon={disableIcon}
      className={className}
      style={style}
    />
  );
};

export default ControlEffect;

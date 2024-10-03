import React, { type CSSProperties, type ReactElement } from 'react';

import Effect from '../Effect/Effect';

import consumableEffects, {
  type ConsumableEffectTypes,
} from '../../data/consumableEffects';

export interface ConsumableEffectProps {
  name: ConsumableEffectTypes;
  text?: string;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
}

const ConsumableEffect = ({
  name,
  text,
  disableTooltip = true,
  disableText,
  disableLink,
  disableIcon,
  className,
  style,
}: ConsumableEffectProps): ReactElement => {
  return (
    <Effect
      type="Consumable"
      name={name}
      displayName={text}
      description={consumableEffects[name]}
      disableTooltip={disableTooltip}
      disableText={disableText}
      disableLink={disableLink}
      disableIcon={disableIcon}
      className={className}
      style={style}
    />
  );
};

export default ConsumableEffect;

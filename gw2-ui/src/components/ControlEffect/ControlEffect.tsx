import React, { type CSSProperties, type ReactElement } from 'react';

import Effect from '../Effect/Effect';

import { type ControlEffectTypes } from '../../data/controlEffects';
import {
  CONTROL_EFFECTS,
  CONTROL_EFFECTS_DESCRIPTIONS,
} from '../../i18n/controlEffects';
import { useTranslation } from '../../i18n';

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
  const nameTranslated = useTranslation(CONTROL_EFFECTS, name);
  const descriptionTranslated = useTranslation(
    CONTROL_EFFECTS_DESCRIPTIONS,
    name,
  );

  return (
    <Effect
      type="Control"
      name={name}
      displayName={nameTranslated}
      description={descriptionTranslated}
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

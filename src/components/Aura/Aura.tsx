import React, { CSSProperties, ReactElement } from 'react';
import Effect from '../Effect/Effect';
import auras from '../../data/auras';
import { AuraTypes } from '../../data/auras';

export interface AuraProps {
  name: AuraTypes;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Aura = ({
  name,
  disableTooltip,
  disableText,
  disableLink,
  disableIcon,
  className,
  style,
}: AuraProps): ReactElement => {
  return (
    <Effect
      type="Aura"
      name={name}
      displayName={`${name} Aura`}
      description={auras[name]}
      disableTooltip={disableTooltip}
      disableText={disableText}
      disableLink={disableLink}
      disableIcon={disableIcon}
      className={className}
      style={style}
    />
  );
};

export default Aura;

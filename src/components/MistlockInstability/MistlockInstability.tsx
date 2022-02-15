import React, { CSSProperties, ReactElement } from 'react';

import Effect from '../Effect/Effect';

import mistlockInstabilities, {
  MistlockInstabilityTypes,
} from '../../data/mistlockInstabilities';

export interface MistlockInstabilityProps {
  name: MistlockInstabilityTypes;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
}

const MistlockInstability = ({
  name,
  disableTooltip,
  disableText,
  disableLink,
  disableIcon,
  className,
  style,
}: MistlockInstabilityProps): ReactElement => {
  return (
    <Effect
      type="MistlockInstability"
      name={name}
      displayName={`Mistlock Instability: ${name}`}
      description={mistlockInstabilities[name]}
      disableTooltip={disableTooltip}
      disableText={disableText}
      disableLink={disableLink}
      disableIcon={disableIcon}
      className={className}
      style={style}
    />
  );
};

export default MistlockInstability;

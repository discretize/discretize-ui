import React, { CSSProperties, ReactElement } from 'react';

import Effect from '../Effect/Effect';

import commonEffects, { CommonEffectTypes } from '../../data/commonEffects';

export interface CommonEffectProps {
  name: CommonEffectTypes | 'Mistlock Singularity';
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
}

const CommonEffect = ({
  name: propsName,
  disableTooltip,
  disableText,
  disableLink,
  disableIcon,
  className,
  style,
}: CommonEffectProps): ReactElement => {
  const name =
    propsName === 'Mistlock Singularity' ? 'Rigorous Certainty' : propsName;

  return (
    <Effect
      type="Common"
      name={name}
      description={commonEffects[name]}
      disableTooltip={disableTooltip}
      disableText={disableText}
      disableLink={disableLink}
      disableIcon={disableIcon}
      className={className}
      style={style}
    />
  );
};

export default CommonEffect;

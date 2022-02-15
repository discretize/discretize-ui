import React, { CSSProperties, ReactElement } from 'react';
import BOONS from '../../data/boons';
import Effect from '../Effect/Effect';

export interface BoonProps {
  name: string;
  count: number;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Boon = ({
  name,
  count,
  disableTooltip,
  disableText,
  disableLink,
  disableIcon,
  className,
  style,
}: BoonProps): ReactElement => {
  return (
    <Effect
      type="Boon"
      name={name}
      description={BOONS[name]}
      iconProps={{ applyCount: count }}
      disableTooltip={disableTooltip}
      disableText={disableText}
      disableLink={disableLink}
      disableIcon={disableIcon}
      className={className}
      style={style}
    />
  );
};

export default Boon;

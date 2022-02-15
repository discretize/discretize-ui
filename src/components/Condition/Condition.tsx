import React, { CSSProperties, ReactElement } from 'react';

import Effect from '../Effect/Effect';

import conditions, { ConditionTypes } from '../../data/conditions';

export interface ConditionProps {
  name: ConditionTypes;
  count?: number;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Condition = ({
  name,
  count = 1,
  disableTooltip,
  disableText,
  disableLink,
  disableIcon,
  className,
  style,
}: ConditionProps): ReactElement => {
  return (
    <Effect
      type="Condition"
      name={name}
      description={conditions[name]}
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

export default Condition;

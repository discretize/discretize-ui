import React, { ReactElement } from 'react';

import Icon, { IconProps } from '../Icon/Icon';
import Progress, { ProgressProps } from '../Progress/Progress';
import css from './IconWithText.module.css';

export interface IconWithTextProps {
  icon: string;
  text: string;
  disableIcon?: boolean;
  disableText?: boolean;
  inline?: boolean;
  iconProps?: IconProps;
  textProps?: any;
  progressProps?: ProgressProps;
  loading?: boolean;
}

const IconWithText = ({
  icon,
  text,
  disableIcon,
  disableText,
  inline,
  iconProps,
  textProps,
  progressProps,
  loading,
}: IconWithTextProps): ReactElement => {
  return (
    <div className={css.root}>
      {!disableIcon &&
        (loading || icon || iconProps?.src || iconProps?.name) && (
          <Icon
            src={icon}
            gutterRight={!disableText}
            inline={!disableText || inline}
            loading={loading}
            {...iconProps}
          />
        )}

      {!disableText &&
        (loading ? (
          <Progress inline={!disableText || inline} {...progressProps} />
        ) : (
          <span {...textProps}>{text}</span>
        ))}
    </div>
  );
};

export default IconWithText;

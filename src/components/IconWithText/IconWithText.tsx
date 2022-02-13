import React, { CSSProperties } from 'react';

import Icon, { IconProps } from '../Icon/Icon';
import Progress, { ProgressProps } from '../Progress/Progress';
import css from './IconWithText.module.css';

export interface IconWithTextProps {
  icon?: string;
  text?: string;
  disableIcon?: boolean;
  disableText?: boolean;
  inline?: boolean;
  iconProps?: IconProps;
  textProps?: any;
  progressProps?: ProgressProps;
  loading?: boolean;
  style?: CSSProperties;
}

const IconWithText = React.forwardRef<HTMLInputElement, IconWithTextProps>(
  (
    {
      icon,
      text,
      disableIcon,
      disableText,
      inline,
      iconProps,
      textProps,
      progressProps,
      loading,
      style,
    }: IconWithTextProps,
    ref,
  ) => {
    return (
      <span ref={ref} className={css.root} style={style}>
        {!disableIcon && (loading || icon || iconProps?.src) && (
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
      </span>
    );
  },
);

export default IconWithText;

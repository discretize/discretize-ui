import clsx from 'clsx';
import React, { CSSProperties } from 'react';

import Icon, { IconProps } from '../Icon/Icon';
import Progress, { ProgressProps } from '../Progress/Progress';
import css from './IconWithText.module.css';

export interface IconWithTextProps {
  icon?: string;
  text?: string | JSX.Element;
  disableIcon?: boolean;
  disableText?: boolean;
  inline?: boolean;
  iconProps?: IconProps;
  textProps?: any;
  progressProps?: ProgressProps;
  loading?: boolean;
  style?: CSSProperties;
  className?: string;
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
      className,
    }: IconWithTextProps,
    ref,
  ) => {
    return (
      <span ref={ref} className={clsx(css.root, className)} style={style}>
        {!disableIcon &&
          (loading ||
            icon ||
            iconProps?.src ||
            iconProps?.iconViaClassname) && (
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

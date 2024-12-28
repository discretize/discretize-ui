import clsx from 'clsx';
import React, {
  type CSSProperties,
  type JSX,
  type MouseEventHandler,
} from 'react';
import Icon, { type IconProps } from '../Icon/Icon';
import Progress, { type ProgressProps } from '../Progress/Progress';
import css from './IconWithText.module.css';

export interface IconWithTextProps {
  icon?: string;
  text?: string | JSX.Element;
  disableIcon?: boolean;
  disableText?: boolean;
  inline?: boolean;
  iconProps?: Partial<IconProps>;
  textProps?: any;
  progressProps?: Partial<ProgressProps>;
  loading?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

const IconWithText = React.forwardRef<HTMLInputElement, IconWithTextProps>(
  function IconWithText(
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
      onClick,
    }: IconWithTextProps,
    ref,
  ) {
    return (
      <span
        ref={ref}
        className={clsx(css.root, className)}
        style={style}
        onClick={onClick}
      >
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

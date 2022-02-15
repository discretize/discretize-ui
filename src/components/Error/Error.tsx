import clsx from 'clsx';
import React, { CSSProperties, ReactElement } from 'react';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsText from '../DetailsText/DetailsText';
import IconWithText from '../IconWithText/IconWithText';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import css from './Error.module.css';

export interface ErrorProps {
  code: number;
  id?: number;
  name?: string;
  message?: string;
  names?: Record<number, string | ((id: number) => string)>;
  messages?: Record<number, string | ((id: number) => string)>;
  disableIcon?: boolean;
  disableText?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  tooltipProps?: TooltipProps;
  className?: string;
  style?: CSSProperties;
}

/**
 * Either path name + message for a static error name and message.
 *
 * Alternatively, pass names + messages, which will pick the right message based on the provided code
 */
const Error = ({
  code,
  id,
  name: nameProps,
  message: messageProps,
  names = {},
  messages = {},
  disableIcon,
  disableText,
  disableTooltip,
  inline,
  tooltipProps,
  className,
  style,
}: ErrorProps): ReactElement => {
  const errorIconClass = code === 404 ? css.imageError404 : css.imageError500;

  function getMessage(
    raw: string | ((id: number) => string) | undefined,
  ): string {
    if (raw === undefined) return '';
    if (typeof raw === 'string') return raw;
    if (id !== undefined) return raw(id);
    return '';
  }
  if (!names && !messages && !nameProps && !messageProps)
    return (
      <span>
        Missing Props. Either pass `name` + `message` or `names` + `messages`
      </span>
    );

  const name = nameProps || getMessage(names[code]);
  const message = messageProps || getMessage(messages[code]);

  return (
    <Tooltip
      content={
        <>
          <DetailsHeader
            iconProps={{ className: errorIconClass, iconViaClassname: true }}
            titleClassName={css.errorColor}
          >
            {name}
          </DetailsHeader>
          <DetailsText lines={[message]} />
        </>
      }
      disabled={disableTooltip}
      {...tooltipProps}
    >
      <IconWithText
        text={name}
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{ className: errorIconClass, iconViaClassname: true }}
        className={clsx(className, css.errorColor)}
        style={style}
      />
    </Tooltip>
  );
};

export default Error;

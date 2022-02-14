import React, { ReactElement } from 'react';

import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsText from '../DetailsText/DetailsText';
import IconWithText from '../IconWithText/IconWithText';
import css from './Error.module.css';

export interface ErrorProps {
  code: number;
  id?: number;
  names: Record<number, string | ((id: number) => string)>;
  messages: Record<number, string | ((id: number) => string)>;
  disableIcon?: boolean;
  disableText?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  tooltipProps?: TooltipProps;
}

const Error = ({
  code,
  id,
  names,
  messages,
  disableIcon,
  disableText,
  disableTooltip,
  inline,
  tooltipProps,
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
  const name = getMessage(names[code]);
  const message = getMessage(messages[code]);

  return (
    <Tooltip
      content={
        <>
          <DetailsHeader
            iconProps={{ className: errorIconClass, iconViaClassname: true }}
            titleClassName={css.errorColor}
          >
            {names[code]}
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
        className={css.errorColor}
      />
    </Tooltip>
  );
};

export default Error;

import clsx from 'clsx';
import React, { CSSProperties, ReactElement } from 'react';
import { APILanguage, useAPILanguage } from '../../i18n';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsText from '../DetailsText/DetailsText';
import IconWithText from '../IconWithText/IconWithText';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import css from './Error.module.css';

type ErrorCode = number;
type ErrorString = string | ((id: number) => string);
type ErrorStrings =
  | ErrorString
  | Record<ErrorCode, ErrorString | Partial<Record<APILanguage, ErrorString>>>;

export interface ErrorProps {
  code: ErrorCode;
  id?: number;
  name: ErrorStrings;
  message: ErrorStrings;
  disableIcon?: boolean;
  disableText?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  tooltipProps?: TooltipProps;
  className?: string;
  style?: CSSProperties;
}

const Error = ({
  code,
  id,
  name: nameProps,
  message: messageProps,
  disableIcon,
  disableText,
  disableTooltip,
  inline,
  tooltipProps,
  className,
  style,
}: ErrorProps): ReactElement => {
  const language = useAPILanguage();
  const errorIconClass = code === 404 ? css.imageError404 : css.imageError500;

  function getMessage(raw: ErrorStrings): string {
    let by_code: ErrorString | Partial<Record<APILanguage, ErrorString>>;
    if (typeof raw !== 'string' && typeof raw !== 'function') {
      by_code = raw[code];
    } else {
      by_code = raw;
    }
    let by_language: ErrorString | undefined;
    if (typeof by_code !== 'string' && typeof by_code !== 'function') {
      by_language = by_code[language] || by_code['en'];
    } else {
      by_language = by_code;
    }
    let item = by_language;
    if (item === undefined) return '';
    if (typeof item === 'string') return item;
    if (id !== undefined) return item(id);
    return '';
  }

  const name = getMessage(nameProps);
  const message = getMessage(messageProps);

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

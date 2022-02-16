import React, { CSSProperties, ReactElement } from 'react';
import races, { RacesTypes } from '../../data/races';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import { ErrorProps } from '../Error/Error';
import { TooltipProps } from '../Tooltip/Tooltip';
import clsx from 'clsx';
import capitalize from 'lodash.capitalize';
import css from './Race.module.css';

export interface RaceProps {
  name: RacesTypes;
  disableTooltip?: boolean;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  inline?: boolean;
  wikiLinkProps?: WikiLinkProps;
  errorProps?: ErrorProps;
  className?: string;
  style?: CSSProperties;
}

const Race = ({
  name,
  disableTooltip,
  disableText,
  disableLink,
  disableIcon,
  inline,
  wikiLinkProps,
  errorProps,
  className,
  style,
}: RaceProps): ReactElement => {
  if (!name || !races.includes(name)) {
    return (
      <Error
        code={404}
        name={`Invalid Race ${name ? `${name}` : ''}`}
        message={`Error: No data for Race ${name ? `${name}` : ''}`}
        disableTooltip={disableTooltip}
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        {...errorProps}
        className={clsx(className, errorProps?.className)}
        style={{
          ...style,
          ...errorProps?.style,
        }}
      />
    );
  }

  return (
    <IconWithText
      text={
        disableLink ? (
          name
        ) : (
          <WikiLink
            to={name}
            {...wikiLinkProps}
            className={clsx(
              wikiLinkProps?.className,
              css[`color${capitalize(name)}`],
            )}
          />
        )
      }
      disableIcon={disableIcon}
      disableText={disableText}
      inline={inline}
      iconProps={{
        className: css[`imageRace${capitalize(name)}`],
        iconViaClassname: true,
      }}
      className={clsx(className, css[`color${capitalize(name)}`])}
    />
  );
};

export default Race;

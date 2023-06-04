import React, { CSSProperties, ReactElement } from 'react';
import races, { RacesTypes } from '../../data/races';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import { ErrorProps } from '../Error/Error';
import clsx from 'clsx';
import { capitalize } from '../../helpers/capitalize';
import css from './Race.module.css';
import { translate, useAPILanguage } from '../../i18n';
import TRANSLATIONS_RACES from '../../i18n/races';
import { IconProps } from '../Icon/Icon';

export interface RaceProps {
  name: RacesTypes;
  text?: string;
  disableTooltip?: boolean;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  inline?: boolean;
  wikiLinkProps?: WikiLinkProps;
  errorProps?: ErrorProps;
  className?: string;
  style?: CSSProperties;
  iconProps?: IconProps;
}

const Race = ({
  name,
  text,
  disableTooltip,
  disableText,
  disableLink,
  disableIcon,
  inline,
  wikiLinkProps,
  errorProps,
  className,
  style,
  iconProps,
}: RaceProps): ReactElement => {
  const language = useAPILanguage();

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

  const translation = translate(TRANSLATIONS_RACES, name, language);

  return (
    <IconWithText
      text={
        disableLink ? (
          text || translation
        ) : (
          <WikiLink
            to={name}
            text={text || translation}
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
        ...iconProps,
      }}
      style={style}
      className={clsx(className, css[`color${capitalize(name)}`])}
    />
  );
};

export default Race;

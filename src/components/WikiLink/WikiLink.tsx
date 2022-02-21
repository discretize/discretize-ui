import clsx from 'clsx';
import React, { CSSProperties, ReactElement } from 'react';
import css from './WikiLink.module.css';

// https://wiki.guildwars2.com/wiki/Template:Language
export const languages = [
  'en',
  'zh',
  'cs',
  'nl',
  'fi',
  'fr',
  'de',
  'hu',
  'it',
  'ja',
  'ko',
  'ms',
  'po',
  'pt',
  'ru',
  'es',
  'sv',
  'tr',
  'un',
] as const;
type languagesAvailable = typeof languages[number];

export interface WikiLinkProps {
  component?: any;
  to: string;
  text?: string;
  lang?: languagesAvailable;
  style?: CSSProperties;
  className?: string;
}

const WikiLink = ({
  component: Component = 'a',
  to,
  text,
  lang = 'en',
  style,
  className,
}: WikiLinkProps): ReactElement => {
  return (
    <Component
      // if there is no className provided, we assume that there is no profession specific styling wanted and default.
      className={clsx(className || css.default, css.root)}
      href={`https://wiki-${lang}.guildwars2.com/wiki/Special:Search/${encodeURIComponent(
        to,
      )}`}
      target="_blank"
      rel="noreferrer noopener nofollow"
      style={style}
    >
      {text || to}
    </Component>
  );
};

export default WikiLink;

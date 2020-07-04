import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useColorModeHighlightSuffix } from '../helpers';

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
];

const WikiLink = forwardRef(
  ({ component: Component, to, lang, ...rest }, ref) => {
    const highlightSuffix = useColorModeHighlightSuffix();

    return (
      <Component
        sx={{
          color: 'primary',
          textDecoration: 'none',
          transition: 'color 200ms ease-in-out',
          '&:hover': {
            color: `primary${highlightSuffix}`,
          },
        }}
        href={`https://wiki-${lang}.guildwars2.com/wiki/Special:Search/${encodeURIComponent(
          to,
        )}`}
        target="_blank"
        rel="noreferrer noopener nofollow"
        {...rest}
        ref={ref}
      >
        {to}
      </Component>
    );
  },
);

WikiLink.propTypes = {
  component: PropTypes.elementType,
  to: PropTypes.string.isRequired,
  lang: PropTypes.oneOf(languages),
};

WikiLink.defaultProps = {
  component: 'a',
  lang: 'en',
};

WikiLink.displayName = 'WikiLink';

export default WikiLink;

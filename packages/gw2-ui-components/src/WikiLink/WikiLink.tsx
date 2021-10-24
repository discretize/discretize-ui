import React, { forwardRef, ReactElement } from 'react'
import PropTypes from 'prop-types'
import { useColorModeHighlightSuffix } from '../helpers'

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
]

export interface WikiLinkProps {
  component: object
  to: string
  lang: string
}

const WikiLink = ({ component, to, lang }: WikiLinkProps): ReactElement => {
  const highlightSuffix = useColorModeHighlightSuffix()

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
    >
      {to}
    </Component>
  )
}

export default WikiLink

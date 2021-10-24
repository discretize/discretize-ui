import React, { ReactElement } from 'react'

import IconWithText from '../IconWithText/IconWithText'
import WikiLink from '../WikiLink/WikiLink'
import Error from '../Error/Error'

import races from '../data/races.json'
import { useColorModeHighlightSuffix } from '../helpers'

export interface RaceProps {
  name: string
  component: object
  disableTooltip: boolean
  disableIcon: boolean
  disableText: boolean
  disableLink: boolean
  inline: boolean
  tooltipProps: object
  wikiLinkProps: object
  errorProps: object
}

const Race = (): ReactElement => {
  const highlightSuffix = useColorModeHighlightSuffix()

  if (!name || !races.includes(name)) {
    return (
      <Error
        name={`Invalid Race${name ? ` ${name}` : ''}`}
        message={`Error: No data for Race${name ? ` ${name}` : ''}`}
        disableTooltip={disableTooltip}
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{ name: '404' }}
        {...errorProps}
        {...{
          style: {
            ...errorProps?.style,
          },
          className: errorProps.className,
          sx: {
            ...errorProps?.sx,
          },
        }}
      />
    )
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
            sx={{
              color: 'inherit',
              '&:hover': {
                color: `gw2.race.${name.toLowerCase()}${highlightSuffix}`,
              },
              ...wikiLinkProps?.sx,
            }}
          />
        )
      }
      disableIcon={disableIcon}
      disableText={disableText}
      inline={inline}
      iconProps={{
        name: `Race.${name}`,
      }}
      sx={{
        color: `gw2.race.${name.toLowerCase()}`,
      }}
    />
  )
}

export default Race

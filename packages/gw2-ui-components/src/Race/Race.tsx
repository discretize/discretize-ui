import React, { ReactElement } from 'react'
import cx from 'classnames'

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
            ...rest.style,
            ...errorProps?.style,
          },
          className: cx(rest.className, errorProps.className),
          sx: {
            ...rest.sx,
            ...errorProps?.sx,
          },
        }}
      />
    )
  }

  return (
    <IconWithText
      component={component}
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
      {...rest}
      iconProps={{
        name: `Race.${name}`,
        ...rest.iconProps,
      }}
      sx={{
        color: `gw2.race.${name.toLowerCase()}`,
        ...rest.sx,
      }}
      ref={ref}
    />
  )
}

export default Race

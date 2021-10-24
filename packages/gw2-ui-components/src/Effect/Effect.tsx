import React, { ReactElement } from 'react'

import Tooltip from '../Tooltip/Tooltip'
import DetailsHeader from '../DetailsHeader/DetailsHeader'
import DetailsText from '../DetailsText/DetailsText'
import IconWithText from '../IconWithText/IconWithText'
import WikiLink from '../WikiLink/WikiLink'
import Error from '../Error/Error'
import { useColorModeHighlightSuffix } from '../helpers'

export interface EffectProps {
  type: string
  name: string
  displayName: string
  description: string
  component: object
  disableTooltip: boolean
  disableText: boolean
  disableLink: boolean
  inline: boolean
  tooltipProps: object
  wikiLinkProps: object
  errorProps: object
}

const Effect = ({
  type,
  name,
  displayName,
  description,
  component,
  disableTooltip,
  disableText,
  disableLink,
  inline,
  tooltipProps,
  wikiLinkProps,
  errorProps,
}: EffectProps): ReactElement => {
  const highlightSuffix = useColorModeHighlightSuffix()

  if (!type || !name || typeof description === 'undefined') {
    return (
      <Error
        name={`Invalid ${type || 'Effect'}${name ? ` ${name}` : ''}`}
        message={`Error: No data for ${type || 'Effect'}${
          name ? ` ${name}` : ''
        }`}
        disableTooltip={disableTooltip}
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{ name: '404' }}
        className={className}
        {...errorProps}
        style={{
          ...errorProps?.style,
        }}
        sx={{
          ...errorProps?.sx,
        }}
      />
    )
  }

  return (
    <Tooltip
      content={
        <>
          <DetailsHeader>{displayName || name}</DetailsHeader>

          {description && <DetailsText lines={[description]} />}
        </>
      }
      disabled={disableTooltip}
      {...tooltipProps}
    >
      <IconWithText
        component={component}
        text={
          disableLink ? (
            displayName || name
          ) : (
            <WikiLink
              to={displayName || name}
              {...wikiLinkProps}
              sx={{
                color: 'inherit',
                '&:hover': {
                  color: `gw2.effect.${camelCase(type)}${highlightSuffix}`,
                },
                ...wikiLinkProps?.sx,
              }}
            />
          )
        }
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        className={className}
        iconProps={{
          name: `${type}.${name}`,
        }}
        sx={{
          color: `gw2.effect.${camelCase(type)}`,
        }}
      />
    </Tooltip>
  )
}

export default Effect

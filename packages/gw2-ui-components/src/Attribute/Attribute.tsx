import React, { ReactElement } from 'react'

import Tooltip from '../Tooltip/Tooltip'
import DetailsHeader from '../DetailsHeader/DetailsHeader'
import DetailsText from '../DetailsText/DetailsText'
import IconWithText from '../IconWithText/IconWithText'
import WikiLink from '../WikiLink/WikiLink'
import Error from '../Error/Error'
import useColorModeHighlightSuffix from '../helpers/useColorModeHighlightSuffix'

import attributes from '../data/attributes.json'

export interface AttributeProps {
  name: string //TODO: AttributeNames
  disableTooltip: boolean
  disableIcon: boolean
  disableText: boolean
  disableLink: boolean
  inline: boolean
  tooltipProps: object
  wikiLinkProps: object
  errorProps: object
}

const Attribute = ({
  name,
  disableTooltip,
  disableIcon,
  disableText,
  disableLink,
  inline,
  tooltipProps,
  wikiLinkProps,
  errorProps,
}: AttributeProps): ReactElement => {
  const highlightSuffix = useColorModeHighlightSuffix()

  const description = (Object.entries(attributes).find(([, values]) =>
    Object.keys(values).includes(name),
  ) || [])[1]?.[name]

  if (!name || typeof description === 'undefined') {
    return (
      <Error
        name={`Invalid Attribute${name ? ` ${name}` : ''}`}
        message={`Error: No data for Attribute${name ? ` ${name}` : ''}`}
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
    <Tooltip
      content={
        <>
          <DetailsHeader>{name}</DetailsHeader>
          <DetailsText lines={[description]} />
        </>
      }
      disabled={disableTooltip}
      {...tooltipProps}
    >
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
                  color: `gw2.attribute${highlightSuffix}`,
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
          name: `Attribute.${name}`,
        }}
        sx={{
          color: `gw2.attribute`,
        }}
      />
    </Tooltip>
  )
}

export default Attribute

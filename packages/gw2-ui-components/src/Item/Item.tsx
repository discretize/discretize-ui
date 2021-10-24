import React, { forwardRef, ReactElement } from 'react'
import PropTypes from 'prop-types'

import withLoading from '../withLoading/withLoading'
import Tooltip from '../Tooltip/Tooltip'
import IconWithText from '../IconWithText/IconWithText'
import WikiLink from '../WikiLink/WikiLink'
import ItemDetails from '../ItemDetails/ItemDetails'
import { useColorModeHighlightSuffix, populateMissingItemAPI } from '../helpers'

export interface ItemProps {
  id: number
  count: number
  component: object
  data: object
  disableIcon: boolean
  disableText: boolean
  disableLink: boolean
  disableTooltip: boolean
  inline: boolean
  tooltipProps: object
  wikiLinkProps: object
  upgrades: string[]
}

const Item = ({
  id,
  count,
  component,
  data,
  disableIcon,
  disableText,
  disableLink,
  disableTooltip,
  inline,
  tooltipProps,
  wikiLinkProps,
  upgrades,
}: ItemProps): ReactElement => {
  const highlightSuffix = useColorModeHighlightSuffix()

  const { name, icon, rarity, type, details: { type: detailsType } = {} } = data

  return (
    <Tooltip
      content={
        <ItemDetails
          data={populateMissingItemAPI(data)}
          count={count}
          upgrades={upgrades}
        />
      }
      disabled={disableTooltip}
      {...tooltipProps}
      containerProps={{
        ...tooltipProps.containerProps,
        sx: { maxWidth: 353, ...tooltipProps.containerProps?.sx },
      }}
    >
      <IconWithText
        component={component}
        icon={icon}
        text={
          <>
            {count > 1 && `${count} `}
            {disableLink ? (
              name
            ) : (
              <WikiLink
                to={name}
                {...wikiLinkProps}
                sx={{
                  color: 'inherit',
                  '&:hover': {
                    color: `gw2.rarity.${rarity.toLowerCase()}${highlightSuffix}`,
                  },
                  ...wikiLinkProps?.sx,
                }}
              />
            )}
          </>
        }
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{
          ...(type &&
            detailsType && {
              name: `${type}.${detailsType}`,
            }),
          applyCount: count,
          applyCountProps: {
            sx: {
              top: '0.1em',
              right: '0.1em',
              bottom: 'initial',
              color: `#fee49a`,
            },
          },
          ...rest.iconProps,
        }}
        sx={{
          color: `gw2.rarity.${rarity.toLowerCase()}`,
          ...rest.sx,
        }}
      />
    </Tooltip>
  )
}

export default withLoading()(Item)

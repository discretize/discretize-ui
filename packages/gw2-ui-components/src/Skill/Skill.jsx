import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import withLoading from '../withLoading/index'
import Tooltip from '../Tooltip/Tooltip'
import IconWithText from '../IconWithText/IconWithText'
import WikiLink from '../WikiLink/WikiLink'
import AbilityDetails from '../AbilityDetails/AbilityDetails'
import { useColorModeHighlightSuffix } from '../helpers'

const Skill = forwardRef(
  (
    {
      id,
      data,
      component,
      disableIcon,
      disableText,
      disableLink,
      disableTooltip,
      inline,
      tooltipProps,
      wikiLinkProps,
      ...rest
    },
    ref,
  ) => {
    const highlightSuffix = useColorModeHighlightSuffix()

    const { name, icon, professions } = data

    const profession = professions?.length && professions[0].toLowerCase()

    return (
      <Tooltip
        content={<AbilityDetails data={data} type="skills" />}
        disabled={disableTooltip}
        {...tooltipProps}
      >
        <IconWithText
          component={component}
          icon={icon}
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
                    color: `gw2.profession.${profession}${highlightSuffix}`,
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
          iconProps={{ zoom: 5, ...rest.iconProps }}
          sx={{
            color: `gw2.profession.${profession}`,
            ...rest.sx,
          }}
          ref={ref}
        />
      </Tooltip>
    )
  },
)

Skill.propTypes = {
  id: PropTypes.number,
  component: PropTypes.elementType,
  data: PropTypes.object.isRequired,
  disableIcon: PropTypes.bool,
  disableText: PropTypes.bool,
  disableLink: PropTypes.bool,
  disableTooltip: PropTypes.bool,
  inline: PropTypes.bool,
  tooltipProps: PropTypes.object,
  wikiLinkProps: PropTypes.object,
}

Skill.defaultProps = {
  id: null,
  component: undefined,
  disableIcon: false,
  disableText: false,
  disableLink: false,
  disableTooltip: false,
  inline: true,
  tooltipProps: {},
  wikiLinkProps: {},
}

Skill.displayName = 'Skill'

export default withLoading()(Skill)

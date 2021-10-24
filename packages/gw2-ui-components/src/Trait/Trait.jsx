import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import withLoading from '../withLoading/index'
import Tooltip from '../Tooltip/Tooltip'
import TooltipContainer from '../TooltipContainer/TooltipContainer'
import IconWithText from '../IconWithText/IconWithText'
import WikiLink from '../WikiLink/WikiLink'
import AbilityDetails from '../AbilityDetails/AbilityDetails'
import {
  populateMissingTraitAPI,
  specializations,
  useColorModeHighlightSuffix,
} from '../helpers'

const Trait = forwardRef(
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
      inactive,
      ...rest
    },
    ref,
  ) => {
    const highlightSuffix = useColorModeHighlightSuffix()

    const { name, icon, specialization, skills, slot } = data

    const [profession] =
      (specialization &&
        Object.entries(specializations).find(([, specializationIds]) =>
          specializationIds.includes(specialization),
        )) ||
      []

    return (
      <Tooltip
        render={
          <>
            <TooltipContainer
              {...(skills && { sx: { borderColor: '#537ca5' } })}
            >
              <AbilityDetails
                data={populateMissingTraitAPI(data)}
                type="traits"
              />
            </TooltipContainer>

            {skills &&
              skills.map((skill) => (
                <TooltipContainer key={`${skill.id}`} sx={{ mt: '6px' }}>
                  <AbilityDetails data={skill} type="skills" />
                </TooltipContainer>
              ))}
          </>
        }
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
          iconProps={{
            zoom: 13,
            inactive,
            hexagon: slot === 'Minor',
            ...rest.iconProps,
          }}
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

Trait.propTypes = {
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
  inactive: PropTypes.bool,
}

Trait.defaultProps = {
  id: null,
  component: undefined,
  disableIcon: false,
  disableText: false,
  disableLink: false,
  disableTooltip: false,
  inline: true,
  tooltipProps: {},
  wikiLinkProps: {},
  inactive: false,
}

Trait.displayName = 'Trait'

export default withLoading()(Trait)

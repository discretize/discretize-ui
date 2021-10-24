import React, { ReactElement } from 'react'

import withLoading from '../withLoading/withLoading'
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

export interface TraitProps {
  data: TraitDataProps
  disableIcon: boolean
  disableText: boolean
  disableLink: boolean
  disableTooltip: boolean
  inline: boolean
  tooltipProps: object
  wikiLinkProps: object
  inactive: boolean
}

export interface TraitDataProps {
  name: string
  icon: string
  specialization: number
  skills: string[]
  slot: string
}

const Trait = ({
  data,
  disableIcon,
  disableText,
  disableLink,
  disableTooltip,
  inline,
  tooltipProps,
  wikiLinkProps,
  inactive,
}: TraitProps): ReactElement => {
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
          <TooltipContainer {...(skills && { sx: { borderColor: '#537ca5' } })}>
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
        iconProps={{
          zoom: 13,
          inactive,
          hexagon: slot === 'Minor',
        }}
        sx={{
          color: `gw2.profession.${profession}`,
        }}
      />
    </Tooltip>
  )
}

export default withLoading()(Trait)

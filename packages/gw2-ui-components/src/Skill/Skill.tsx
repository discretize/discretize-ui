import React, { ReactElement } from 'react'

import withLoading from '../withLoading/withLoading'
import Tooltip from '../Tooltip/Tooltip'
import IconWithText from '../IconWithText/IconWithText'
import WikiLink from '../WikiLink/WikiLink'
import AbilityDetails from '../AbilityDetails/AbilityDetails'
import { useColorModeHighlightSuffix } from '../helpers'

export interface SkillProps {
  id: number
  component: object
  data: object
  disableIcon: boolean
  disableText: boolean
  disableLink: boolean
  disableTooltip: boolean
  inline: boolean
  tooltipProps: object
  wikiLinkProps: object
}

const Skill = ({
  id,
  component,
  data,
  disableIcon,
  disableText,
  disableLink,
  disableTooltip,
  inline,
  tooltipProps,
  wikiLinkProps,
}: SkillProps): ReactElement => {
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
        iconProps={{ zoom: 5, ...rest.iconProps }}
        sx={{
          color: `gw2.profession.${profession}`,
          ...rest.sx,
        }}
      />
    </Tooltip>
  )
}

export default withLoading()(Skill)

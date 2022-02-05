import React, { ReactElement } from 'react'

import IconWithText from '../IconWithText/IconWithText'
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink'
import Error, { ErrorProps } from '../Error/Error'

import professions from '../data/professions.json'
import { useColorModeHighlightSuffix } from '../helpers'
import { TooltipProps } from '../Tooltip/Tooltip'

export interface ProfessionProps {
  name: string
  eliteSpecialization: string
  component: object
  disableTooltip: boolean
  disableIcon: boolean
  disableLink: boolean
  inline: boolean
  tooltipProps: TooltipProps
  wikiLinkProps: WikiLinkProps
  errorProps: ErrorProps
}

const Profession = ({
  name: propsName,
  eliteSpecialization,
  component,
  disableTooltip,
  disableIcon,
  disableLink,
  inline,
  tooltipProps,
  wikiLinkProps,
  errorProps,
}: ProfessionProps): ReactElement => {
  const highlightSuffix = useColorModeHighlightSuffix()

  let name

  if (eliteSpecialization) {
    // eslint-disable-next-line prefer-destructuring
    name = (Object.entries(professions).find(
      ([, professionEliteSpecializations]) =>
        professionEliteSpecializations.includes(eliteSpecialization),
    ) || [])[0]
  } else if (Object.keys(professions).includes(propsName)) {
    name = propsName
  }

  if (!name) {
    return (
      <Error
        name={`Invalid Profession${propsName ? ` ${propsName}` : ''}`}
        message={`Error: No data for Profession${
          propsName ? ` ${propsName}` : ''
        }${propsName && eliteSpecialization ? ' and' : ''}${
          eliteSpecialization
            ? ` elite specialization ${eliteSpecialization}`
            : ''
        }`}
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
      component={component}
      text={
        disableLink ? (
          eliteSpecialization || name
        ) : (
          <WikiLink
            to={eliteSpecialization || name}
            {...wikiLinkProps}
            sx={{
              color: 'inherit',
              '&:hover': {
                color: `gw2.profession.${name.toLowerCase()}${highlightSuffix}`,
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
        name: `Profession.${eliteSpecialization || name}`,
      }}
      sx={{
        color: `gw2.profession.${name.toLowerCase()}`,
      }}
    />
  )
}

export default Profession

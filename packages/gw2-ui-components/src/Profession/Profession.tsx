import React, { forwardRef, ReactElement } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import IconWithText from '../IconWithText/IconWithText'
import WikiLink from '../WikiLink/WikiLink'
import Error from '../Error/Error'

import professions from '../data/professions.json'
import { useColorModeHighlightSuffix } from '../helpers'

export interface ProfessionProps {
  name: string
  eliteSpecialization: string
  component: object
  disableTooltip: boolean
  disableIcon: boolean
  disableLink: boolean
  inline: boolean
  tooltipProps: object
  wikiLinkProps: object
  errorProps: object
}

const Profession = ({
  name,
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
      {...rest}
      iconProps={{
        name: `Profession.${eliteSpecialization || name}`,
        ...rest.iconProps,
      }}
      sx={{
        color: `gw2.profession.${name.toLowerCase()}`,
        ...rest.sx,
      }}
    />
  )
}

export default Profession

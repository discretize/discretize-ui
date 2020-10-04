import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import IconWithText from '../IconWithText'
import WikiLink from '../WikiLink'
import Error from '../Error'

import professions from '../data/professions.json'
import { useColorModeHighlightSuffix } from '../helpers'

const Profession = forwardRef(
  (
    {
      name: propsName,
      eliteSpecialization,
      component,
      disableTooltip,
      disableIcon,
      disableText,
      disableLink,
      inline,
      wikiLinkProps,
      tooltipProps,
      errorProps,
      ...rest
    },
    ref,
  ) => {
    const highlightSuffix = useColorModeHighlightSuffix()

    let name

    if (eliteSpecialization) {
      // eslint-disable-next-line prefer-destructuring
      name = (Object.entries(
        professions,
      ).find(([, professionEliteSpecializations]) =>
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
        ref={ref}
      />
    )
  },
)

Profession.propTypes = {
  name: PropTypes.oneOf(Object.keys(professions)),
  eliteSpecialization: PropTypes.oneOf(
    [].concat(...Object.values(professions)),
  ),
  component: PropTypes.elementType,
  disableTooltip: PropTypes.bool,
  disableIcon: PropTypes.bool,
  disableText: PropTypes.bool,
  disableLink: PropTypes.bool,
  inline: PropTypes.bool,
  tooltipProps: PropTypes.object,
  wikiLinkProps: PropTypes.object,
  errorProps: PropTypes.object,
}

Profession.defaultProps = {
  name: null,
  eliteSpecialization: null,
  component: undefined,
  disableTooltip: false,
  disableIcon: false,
  disableText: false,
  disableLink: false,
  inline: true,
  tooltipProps: {},
  wikiLinkProps: {},
  errorProps: {},
}

Profession.displayName = 'Profession'

export default Profession

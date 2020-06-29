import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import IconWithText from '../IconWithText';
import WikiLink from '../WikiLink';
import Error from '../Error';

import professions from '../data/professions.json';

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
    let name;

    if (propsName) {
      if (
        professions.findIndex(
          ([professionName]) => professionName === propsName,
        ) !== -1
      ) {
        name = propsName;
      }
    } else {
      // eslint-disable-next-line prefer-destructuring
      name = professions.find(([, eliteSpecializations]) =>
        eliteSpecializations.includes(eliteSpecialization),
      )[0];
    }

    if (!name) {
      return (
        <Error
          name={`Invalid profession${propsName ? ` ${propsName}` : ''}`}
          message={`Error: No data for${propsName ? ` ${propsName}` : ''}${
            eliteSpecialization
              ? ` and elite specialization ${eliteSpecialization}`
              : ''
          }`}
          disableTooltip={disableTooltip}
          disableIcon={disableIcon}
          disableText={disableText}
          inline={inline}
          iconProps={{ name: '404' }}
          sx={{
            ...(rest.style?.fontSize && {
              fontSize: `${rest.style.fontSize}${
                typeof rest.style.fontSize === 'number' ? 'px' : ''
              }`,
            }),
          }}
          {...errorProps}
        />
      );
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
                  color: `profession.${name.toLowerCase()}.dark`,
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
          color: `profession.${name.toLowerCase()}.medium`,
          ...rest.sx,
        }}
        ref={ref}
      />
    );
  },
);

Profession.propTypes = {
  name: PropTypes.oneOf(professions.map(([name]) => name)),
  eliteSpecialization: PropTypes.oneOf(
    [].concat(
      ...professions.map(([, eliteSpecializations]) => eliteSpecializations),
    ),
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
};

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
};

Profession.displayName = 'Profession';

export default Profession;

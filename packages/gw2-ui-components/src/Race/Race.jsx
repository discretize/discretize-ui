import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import IconWithText from '../IconWithText';
import WikiLink from '../WikiLink';
import Error from '../Error';

import races from '../data/races.json';

const Race = forwardRef(
  (
    {
      name,
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
    if (!name || !races.includes(name)) {
      return (
        <Error
          name={`Invalid Race${name ? ` ${name}` : ''}`}
          message={`Error: No data for Race${name ? ` ${name}` : ''}`}
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
            name
          ) : (
            <WikiLink
              to={name}
              {...wikiLinkProps}
              sx={{
                color: 'inherit',
                '&:hover': {
                  color: `race.${name.toLowerCase()}.dark`,
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
          name: `Race.${name}`,
          ...rest.iconProps,
        }}
        sx={{
          color: `race.${name.toLowerCase()}.medium`,
          ...rest.sx,
        }}
        ref={ref}
      />
    );
  },
);

Race.propTypes = {
  name: PropTypes.oneOf(races).isRequired,
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

Race.defaultProps = {
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

Race.displayName = 'Race';

export default Race;

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';
import DetailsHeader from '../DetailsHeader';
import DetailsText from '../DetailsText';
import IconWithText from '../IconWithText';
import WikiLink from '../WikiLink';
import Error from '../Error';
import useColorModeHighlightSuffix from '../helpers/useColorModeHighlightSuffix';

import attributes from '../data/attributes.json';

const Attribute = forwardRef(
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
    const highlightSuffix = useColorModeHighlightSuffix();

    const description = (Object.entries(attributes).find(([, values]) =>
      Object.keys(values).includes(name),
    ) || [])[1]?.[name];

    if (!name || typeof description === 'undefined') {
      return (
        <Error
          name={`Invalid Attribute${name ? ` ${name}` : ''}`}
          message={`Error: No data for Attribute${name ? ` ${name}` : ''}`}
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
      <Tooltip
        content={
          <>
            <DetailsHeader>{name}</DetailsHeader>
            <DetailsText>{description}</DetailsText>
          </>
        }
        disabled={disableTooltip}
        {...tooltipProps}
      >
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
                    color: `gw2.attribute${highlightSuffix}`,
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
            name: `Attribute.${name}`,
            ...rest.iconProps,
          }}
          sx={{
            color: `gw2.attribute`,
            ...rest.sx,
          }}
          ref={ref}
        />
      </Tooltip>
    );
  },
);

Attribute.propTypes = {
  name: PropTypes.oneOf(
    [].concat(...Object.values(attributes).map(values => Object.keys(values))),
  ).isRequired,
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

Attribute.defaultProps = {
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

Attribute.displayName = 'Attribute';

export default Attribute;

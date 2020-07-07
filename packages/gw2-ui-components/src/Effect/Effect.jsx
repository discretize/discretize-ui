import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import camelCase from 'lodash.camelcase';

import Tooltip from '../Tooltip';
import DetailsHeader from '../DetailsHeader';
import DetailsText from '../DetailsText';
import IconWithText from '../IconWithText';
import WikiLink from '../WikiLink';
import Error from '../Error';
import { useColorModeHighlightSuffix } from '../helpers';

const Effect = forwardRef(
  (
    {
      type,
      name,
      displayName,
      description,
      component,
      disableTooltip,
      disableIcon,
      disableText,
      disableLink,
      inline,
      wikiLinkProps,
      tooltipProps,
      errorProps,
      className,
      ...rest
    },
    ref,
  ) => {
    const highlightSuffix = useColorModeHighlightSuffix();

    if (!type || !name || typeof description === 'undefined') {
      return (
        <Error
          name={`Invalid ${type || 'Effect'}${name ? ` ${name}` : ''}`}
          message={`Error: No data for ${type || 'Effect'}${
            name ? ` ${name}` : ''
          }`}
          disableTooltip={disableTooltip}
          disableIcon={disableIcon}
          disableText={disableText}
          inline={inline}
          iconProps={{ name: '404' }}
          className={className}
          {...errorProps}
          style={{
            ...errorProps?.style,
            ...rest.style,
          }}
          sx={{
            ...errorProps?.sx,
            ...rest.sx,
          }}
        />
      );
    }

    return (
      <Tooltip
        content={
          <>
            <DetailsHeader>{displayName || name}</DetailsHeader>

            {description && <DetailsText lines={[description]} />}
          </>
        }
        disabled={disableTooltip}
        {...tooltipProps}
      >
        <IconWithText
          component={component}
          text={
            disableLink ? (
              displayName || name
            ) : (
              <WikiLink
                to={displayName || name}
                {...wikiLinkProps}
                sx={{
                  color: 'inherit',
                  '&:hover': {
                    color: `gw2.effect.${camelCase(type)}${highlightSuffix}`,
                  },
                  ...wikiLinkProps?.sx,
                }}
              />
            )
          }
          disableIcon={disableIcon}
          disableText={disableText}
          inline={inline}
          className={className}
          {...rest}
          iconProps={{
            name: `${type}.${name}`,
            ...rest.iconProps,
          }}
          sx={{
            color: `gw2.effect.${camelCase(type)}`,
            ...rest.sx,
          }}
          ref={ref}
        />
      </Tooltip>
    );
  },
);

Effect.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string,
  description: PropTypes.string,
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

Effect.defaultProps = {
  displayName: null,
  description: undefined,
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

Effect.displayName = 'Effect';

export default Effect;

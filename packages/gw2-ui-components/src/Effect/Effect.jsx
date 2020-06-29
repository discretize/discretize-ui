import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ClassNames } from '@emotion/core';
import { useThemeUI } from '@theme-ui/core';
import camelCase from 'lodash.camelcase';

import Tooltip from '../Tooltip';
import DetailsHeader from '../DetailsHeader';
import DetailsText from '../DetailsText';
import IconWithText from '../IconWithText';
import WikiLink from '../WikiLink';
import Error from '../Error';
import { formatFlavor } from '../helpers';

import effects from '../data/effects.json';

const Effect = forwardRef(
  (
    {
      type: propsType,
      name: propsName,
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
    const {
      theme: { colors: { details: { reminder } = {} } = {} } = {},
    } = useThemeUI();

    const type =
      propsType ||
      Object.keys(effects)[
        Object.entries(effects).findIndex(([, nameDescriptionPairs]) =>
          Object.keys(nameDescriptionPairs).includes(propsName),
        )
      ];
    const description = effects[type]?.[propsName];
    const name =
      type === 'Mistlock Instability'
        ? `Mistlock Instability: ${propsName}`
        : propsName;

    if (typeof description === 'undefined') {
      return (
        <Error
          name={`Invalid ${type} ${propsName}`}
          message={`Error: No data for ${type} ${propsName}`}
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

            {description && (
              <DetailsText>
                <ClassNames>
                  {({ css }) =>
                    formatFlavor(description, {
                      reminder: css({ color: reminder }),
                    })
                  }
                </ClassNames>
              </DetailsText>
            )}
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
                    color: `effect.${camelCase(type)}.dark`,
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
            name: `${type}.${propsName}`,
            ...rest.iconProps,
          }}
          sx={{
            color: `effect.${camelCase(type)}.medium`,
            ...rest.sx,
          }}
          ref={ref}
        />
      </Tooltip>
    );
  },
);

Effect.propTypes = {
  type: PropTypes.oneOf(Object.keys(effects)),
  name: PropTypes.oneOf(
    Object.values(effects).flatMap(nameDescriptionPairs =>
      Object.keys(nameDescriptionPairs),
    ),
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

Effect.defaultProps = {
  type: null,
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

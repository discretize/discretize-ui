import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { getDisplayName } from '../helpers';
import IconWithText from '../IconWithText';
import Error from '../Error';

export default ({
  component: defaultComponent = undefined,
  disableIcon: defaultDisableIcon = false,
  disableText: defaultDisableText = false,
  disableTooltip: defaultDisableTooltip = false,
  inline: defaultInline = true,
  iconWithTextProps: defaultIconWithTextProps = {},
  errorProps: defaultErrorProps = {},
} = {}) => Component => {
  const displayName = getDisplayName(Component);

  const WithLoading = forwardRef(
    ({ loading, error, errorProps, iconWithTextProps, ...rest }, ref) => {
      const { id, data, disableIcon, disableText, disableTooltip, inline } = {
        ...rest,
      };

      if (loading) {
        return (
          <IconWithText
            loading={loading}
            disableIcon={disableIcon}
            disableText={disableText}
            inline={inline}
            sx={{
              ...(rest.style?.fontSize && {
                fontSize: `${rest.style.fontSize}${
                  typeof rest.style.fontSize === 'number' ? 'px' : ''
                }`,
              }),
            }}
            {...iconWithTextProps}
          />
        );
      }

      if (error || !data) {
        return (
          <Error
            code={error?.code}
            name={`Invalid ${displayName}${id ? ` ${id}` : ''}`}
            message={`${error?.name ? `${error.name}: ` : ''}${error?.message ||
              (!data ? 'No data' : 'Unknown error')}${
              id ? ` for ${displayName} ${id}` : ''
            }`}
            disableTooltip={disableTooltip}
            disableIcon={disableIcon}
            disableText={disableText}
            inline={inline}
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

      return <Component {...rest} ref={ref} />;
    },
  );

  WithLoading.propTypes = {
    id: PropTypes.number,
    component: PropTypes.elementType,
    data: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
      message: PropTypes.string,
    }),
    disableIcon: PropTypes.bool,
    disableText: PropTypes.bool,
    disableTooltip: PropTypes.bool,
    inline: PropTypes.bool,
    iconWithTextProps: PropTypes.object,
    errorProps: PropTypes.object,
  };

  WithLoading.defaultProps = {
    id: null,
    data: null,
    loading: false,
    error: null,
    component: defaultComponent,
    disableIcon: defaultDisableIcon,
    disableText: defaultDisableText,
    disableTooltip: defaultDisableTooltip,
    inline: defaultInline,
    iconWithTextProps: defaultIconWithTextProps,
    errorProps: defaultErrorProps,
  };

  WithLoading.displayName = `WithLoading(${displayName})`;

  return WithLoading;
};

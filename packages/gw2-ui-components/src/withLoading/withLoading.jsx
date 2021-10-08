import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Error from '../Error'
import { getDisplayName } from '../helpers'
import IconWithText from '../IconWithText'

export default ({
    component: defaultComponent = undefined,
    disableIcon: defaultDisableIcon = false,
    disableText: defaultDisableText = false,
    disableTooltip: defaultDisableTooltip = false,
    inline: defaultInline = true,
    iconWithTextProps: defaultIconWithTextProps = {},
    errorProps: defaultErrorProps = {},
  } = {}) =>
  (Component) => {
    const displayName = getDisplayName(Component)

    const WithLoading = forwardRef(
      ({ loading, error, errorProps, iconWithTextProps, ...rest }, ref) => {
        const {
          id,
          data,
          disableIcon,
          disableText,
          disableTooltip,
          inline,
          iconProps,
        } = {
          ...rest,
        }

        if (loading) {
          return (
            <IconWithText
              loading={loading}
              disableIcon={disableIcon}
              disableText={disableText}
              inline={inline}
              {...iconWithTextProps}
              iconProps={{ ...iconWithTextProps?.iconProps, ...iconProps }}
              {...{
                style: {
                  ...rest.style,
                  ...iconWithTextProps?.style,
                },
                className: cx(rest.className, iconWithTextProps.className),
                sx: {
                  ...iconWithTextProps?.sx,
                },
              }}
            />
          )
        }

        if (error || !data) {
          return (
            <Error
              code={error?.code || error?.response?.status}
              name={`Invalid ${displayName}${id ? ` ${id}` : ''}`}
              message={`${error?.name ? `${error.name}: ` : ''}${
                error?.response?.data?.text ||
                error?.message ||
                (!data ? 'No data' : 'Unknown error')
              }${id ? ` for ${displayName} ${id}` : ''}`}
              disableTooltip={disableTooltip}
              disableIcon={disableIcon}
              disableText={disableText}
              inline={inline}
              {...errorProps}
              iconProps={{ ...errorProps?.iconProps, ...iconProps }}
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

        return <Component {...rest} ref={ref} />
      },
    )

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
    }

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
    }

    WithLoading.displayName = `WithLoading(${displayName})`

    return WithLoading
  }

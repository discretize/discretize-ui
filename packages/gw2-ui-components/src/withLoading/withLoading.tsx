import cx from 'classnames'
import React, { ReactElement } from 'react'
import Error, { ErrorProps } from '../Error/Error'
import { getDisplayName } from '../helpers'
import IconWithText from '../IconWithText/IconWithText'

export interface WithLoadingProps {
  id: number
  component: object
  data: object
  loading: boolean
  error: ErrorProps
  disableIcon: boolean
  disableText: boolean
  disableTooltip: boolean
  inline: boolean
  iconWithTextProps: object
  errorProps: object
}

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

    const WithLoading = ({
      id,
      component,
      data,
      loading,
      error,
      disableIcon,
      disableText,
      disableTooltip,
      inline,
      iconWithTextProps,
      errorProps,
    }: WithLoadingProps): ReactElement => {
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

      return <Component />
    }

    return WithLoading
  }

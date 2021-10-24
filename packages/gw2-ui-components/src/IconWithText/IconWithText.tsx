import React, { ReactElement } from 'react'

import Icon from '../Icon/Icon'
import Progress from '../Progress/Progress'

export interface IconWithTextProps {
  icon: string | ReactElement //TODO verify
  iconPosition: 'left' | 'right'
  text: string //TODO verify
  disableIcon: boolean
  disableText: boolean
  inline: boolean
  iconProps: object
  textProps: object
  progressProps: object
  loading: boolean
}

const IconWithText = ({
  icon,
  iconPosition,
  text,
  disableIcon,
  disableText,
  inline,
  iconProps,
  textProps,
  progressProps,
  loading,
}: IconWithTextProps): ReactElement => {
  return (
    <Component
      sx={{
        color: 'text',
        fontFamily: 'gw2.body',
        fontWeight: 'gw2.body',
        lineHeight: 'gw2.body',
      }}
    >
      {!disableIcon &&
        iconPosition === 'left' &&
        (loading ||
        typeof icon === 'string' ||
        iconProps?.src ||
        iconProps?.name ? (
          <Icon
            src={icon}
            gutterRight={!disableText}
            inline={!disableText || inline}
            loading={loading}
            {...iconProps}
          />
        ) : (
          icon
        ))}

      {!disableText &&
        (loading ? (
          <Progress inline={!disableText || inline} {...progressProps} />
        ) : (
          <span {...textProps}>{text}</span>
        ))}

      {!disableIcon &&
        iconPosition === 'right' &&
        (loading ||
        typeof icon === 'string' ||
        iconProps?.src ||
        iconProps?.name ? (
          <Icon
            src={icon}
            gutterLeft={!disableText}
            inline={!disableText || inline}
            loading={loading}
            {...iconProps}
          />
        ) : (
          icon
        ))}
    </Component>
  )
}

export default IconWithText

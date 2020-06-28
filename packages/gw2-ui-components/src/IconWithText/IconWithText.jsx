import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Progress from '../Progress';

const IconWithText = forwardRef(
  (
    {
      component: Component,
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
      ...rest
    },
    ref,
  ) => (
    <Component
      sx={{
        color: 'text',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
      }}
      {...rest}
      ref={ref}
    >
      {!disableIcon &&
        iconPosition === 'left' &&
        (loading ||
        typeof icon === 'string' ||
        iconProps?.src ||
        iconProps?.placeholder ? (
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
          <Progress {...progressProps} />
        ) : (
          <span {...textProps}>{text}</span>
        ))}

      {!disableIcon &&
        iconPosition === 'right' &&
        (loading ||
        typeof icon === 'string' ||
        iconProps?.src ||
        iconProps?.placeholder ? (
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
  ),
);

IconWithText.propTypes = {
  component: PropTypes.elementType,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  text: PropTypes.node,
  disableIcon: PropTypes.bool,
  disableText: PropTypes.bool,
  inline: PropTypes.bool,
  iconProps: PropTypes.object,
  textProps: PropTypes.object,
  progressProps: PropTypes.object,
  loading: PropTypes.bool,
};

IconWithText.defaultProps = {
  component: 'span',
  icon: null,
  iconPosition: 'left',
  text: null,
  disableIcon: false,
  disableText: false,
  inline: true,
  iconProps: {},
  textProps: {},
  progressProps: {},
  loading: false,
};

IconWithText.displayName = 'IconWithText';

export default IconWithText;

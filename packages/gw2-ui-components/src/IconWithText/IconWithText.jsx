import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '../helpers';
import Icon from '../Icon';

const styles = theme => ({
  root: {},
  icon: {},
  text: { ...theme.typography.text },
});

const IconWithText = ({
  classes,
  className,
  component: Component,
  icon,
  iconPosition,
  text,
  disableIcon,
  disableText,
  inline,
  iconProps,
  ...rest
}) => (
  <Component className={classNames(className, classes.root)} {...rest}>
    {!disableIcon &&
      iconPosition === 'left' &&
      (typeof icon === 'string' ? (
        <Icon
          className={classes.icon}
          src={icon}
          gutterRight={!disableText}
          inline={!disableText || inline}
          {...iconProps}
        />
      ) : (
        icon
      ))}

    {!disableText && <span className={classes.text}>{text}</span>}

    {!disableIcon &&
      iconPosition === 'right' &&
      (typeof icon === 'string' ? (
        <Icon
          className={classes.icon}
          src={icon}
          gutterLeft={!disableText}
          inline={!disableText || inline}
          {...iconProps}
        />
      ) : (
        icon
      ))}
  </Component>
);

IconWithText.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  text: PropTypes.node,
  disableIcon: PropTypes.bool,
  disableText: PropTypes.bool,
  inline: PropTypes.bool,
  iconProps: PropTypes.object,
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
};

export default withStyles(styles)(IconWithText);

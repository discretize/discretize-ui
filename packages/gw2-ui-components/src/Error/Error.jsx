import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '../helpers';
import Tooltip, { TooltipContent } from '../Tooltip';
import IconWithText from '../IconWithText';
import ErrorTooltipContent from './ErrorTooltipContent';

const styles = theme => ({
  root: {},
  icon: {},
  text: { color: theme.palette.text.error },
  tooltip: {},
});

const Error = ({
  classes,
  className,
  component,
  name,
  message,
  code,
  disableTooltip,
  disableIcon,
  disableText,
  inline,
  iconProps,
  tooltipProps,
  ...rest
}) => {
  const { icon: ignoredIcon, text: ignoredText, ...iconWithTextRest } = {
    ...rest,
  };

  const iconWithText = (
    <IconWithText
      className={classNames(classes.root, className)}
      classes={{
        icon: classes.icon,
        text: classes.text,
      }}
      component={component}
      text={name}
      disableIcon={disableIcon}
      disableText={disableText}
      inline={inline}
      iconProps={{ placeholder: code, ...iconProps }}
      {...iconWithTextRest}
    />
  );

  return disableTooltip ? (
    iconWithText
  ) : (
    <Tooltip
      className={classes.tooltip}
      render={
        <TooltipContent>
          <ErrorTooltipContent
            code={code}
            name={name}
            message={message}
            {...tooltipProps}
          />
        </TooltipContent>
      }
      {...tooltipProps}
    >
      {iconWithText}
    </Tooltip>
  );
};

Error.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  code: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.string,
  disableIcon: PropTypes.bool,
  disableText: PropTypes.bool,
  disableTooltip: PropTypes.bool,
  inline: PropTypes.bool,
  iconProps: PropTypes.object,
  tooltipProps: PropTypes.object,
};

Error.defaultProps = {
  component: undefined,
  code: null,
  name: null,
  message: null,
  disableIcon: false,
  disableText: false,
  disableTooltip: false,
  inline: true,
  iconProps: {},
  tooltipProps: {},
};

export default withStyles(styles)(Error);

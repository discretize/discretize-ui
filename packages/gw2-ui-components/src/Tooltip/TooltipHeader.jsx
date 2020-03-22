import React from 'react';
import classNames from 'classnames';

import { withStyles } from '../helpers';

import Icon from '../Icon';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: '2rem',
    marginRight: theme.spacing.unit * 0.75,
    border: '1px solid rgba(255,255,255,0.38)',
  },
  title: {
    color: theme.palette.tooltip.title,
    fontSize: '1rem',
    fontWeight: 500,
    textShadow: '2px 2px 2px rgb(9, 10, 14)',
    flexGrow: 1,
  },
  flags: {},
  flag: {
    marginLeft: theme.spacing.unit * 0.75,
  },
  flagIcon: {
    marginLeft: '0.125em',
  },
});

const TooltipHeader = ({
  className,
  classes,
  iconSrc,
  iconPlaceholder,
  flags,
  children,
}) => (
  <div className={classNames(className, classes.root)}>
    {(iconSrc || iconPlaceholder) && (
      <Icon
        src={iconSrc}
        placeholder={iconPlaceholder}
        className={classes.icon}
      />
    )}

    <div className={classes.title}>{children}</div>

    {flags && flags.length > 0 && (
      <div className={classes.flags}>
        {flags.map(({ icon: flagIcon, value }) => (
          <span key={`${flagIcon}-${value}`} className={classes.flag}>
            {value}
            {flagIcon && <Icon src={flagIcon} className={classes.flagIcon} />}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default withStyles(styles)(TooltipHeader);

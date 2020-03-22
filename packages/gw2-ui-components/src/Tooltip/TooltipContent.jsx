import React from 'react';
import classNames from 'classnames';

import { withStyles } from '../helpers';
import tooltipBackground from '../assets/images/tooltip-background.png';

const styles = theme => ({
  root: {
    backgroundColor: '#000',
    border: `2px solid ${theme.palette.border}`,
    boxShadow:
      '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    padding: theme.spacing.unit * 0.5,
    backgroundPosition: 'top left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${tooltipBackground})`,
    ...theme.typography.tooltip,
    color: theme.palette.tooltip.primary,
    borderRadius: theme.shape.borderRadius,
    '& > div:not(:last-child)': {
      marginBottom: '0.35em',
    },
  },
});

const TooltipContent = ({ className, classes, children }) => (
  <div className={classNames(className, classes.root)}>{children}</div>
);

export default withStyles(styles)(TooltipContent);

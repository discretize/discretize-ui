import React from 'react';
import classNames from 'classnames';

import { withStyles } from '../helpers';

const styles = {
  root: {
    whiteSpace: 'pre-wrap',
  },
};

const TooltipDescription = ({ className, classes, children }) => (
  <div className={classNames(className, classes.root)}>{children}</div>
);

export default withStyles(styles)(TooltipDescription);

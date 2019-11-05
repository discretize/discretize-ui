import React, { Fragment } from 'react';

import { TooltipHeader } from '../Tooltip';
import { withStyles } from '../helpers';

const ErrorTooltipContent = ({ classes, code, name, message }) => (
  <Fragment>
    <TooltipHeader iconPlaceholder={code} classes={{ title: classes.title }}>
      {name}
    </TooltipHeader>

    <div className={classes.description}>{message}</div>
  </Fragment>
);

export default withStyles()(ErrorTooltipContent);

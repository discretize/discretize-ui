import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';
import { DetailsHeader } from 'gw2-ui-components-bulk';
import { Tooltip, Icon } from 'gw2-ui-bulk';
import iconSizes from './helpers/iconSizes';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      whiteSpace: 'nowrap',
    },
  },
}));

const NoSelection = React.memo(({ className, size, ...rest }) => {
  const classes = useStyles();

  return (
    <Tooltip content={<DetailsHeader>Empty Slot</DetailsHeader>}>
      <span
        className={classNames(classes.root, className)}
        style={{
          fontSize: iconSizes[size],
          lineHeight: 0,
          fontFamily: 'Menomonia',
        }}
      >
        <Icon name="Empty" {...rest} />
      </span>
    </Tooltip>
  );
});

export default NoSelection;

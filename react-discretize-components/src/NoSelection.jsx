import React from 'react';
import classNames from 'classnames';
import { makeStyles } from 'tss-react/mui';
import { Tooltip, Icon, DetailsHeader } from '@discretize/gw2-ui-new';
import iconSizes from './helpers/iconSizes';

const useStyles = makeStyles()((theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      whiteSpace: 'nowrap',
    },
  },
}));

const NoSelection = React.memo(({ className, size, ...rest }) => {
  const { classes } = useStyles();

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

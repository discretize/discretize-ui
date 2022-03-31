import React from 'react';
import classNames from 'classnames';
import { makeStyles } from 'tss-react/mui';
import { Tooltip, Icon, DetailsHeader } from '@discretize/gw2-ui-new';
import sizes, { IconSizes } from './iconSizes';

const useStyles = makeStyles()((theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      whiteSpace: 'nowrap',
    },
  },
}));

export interface NoSelectionProps {
  className?: string;
  size?: IconSizes;
}

const NoSelection = ({ className, size, ...rest }: NoSelectionProps) => {
  const { classes } = useStyles();

  return (
    <Tooltip content={<DetailsHeader>Empty Slot</DetailsHeader>}>
      <span
        className={classNames(classes.root, className)}
        style={{
          ...(size && { fontSize: sizes[size] }),
          lineHeight: 0,
          fontFamily: 'Menomonia',
        }}
      >
        <Icon name="Empty" {...rest} />
      </span>
    </Tooltip>
  );
};

export default React.memo(NoSelection);

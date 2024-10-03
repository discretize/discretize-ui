import React from 'react';
import classNames from 'classnames';
import { Tooltip, Icon, DetailsHeader } from '@discretize/gw2-ui-new';
import sizes, { type IconSizes } from '../iconSizes';
import classes from './NoSelection.module.css';

export interface NoSelectionProps {
  className?: string;
  size?: IconSizes;
}

const NoSelection = ({ className, size, ...rest }: NoSelectionProps) => {
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

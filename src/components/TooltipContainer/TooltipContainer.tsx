import clsx from 'clsx';
import React, { PropsWithChildren, ReactElement } from 'react';
import css from './TooltipContainer.module.css';

export type TooltipContainerProps = PropsWithChildren<{
  className?: string;
}>;

const TooltipContainer = ({
  children,
  className,
}: TooltipContainerProps): ReactElement => {
  return <div className={clsx(css.root, className)}>{children}</div>;
};

export default TooltipContainer;

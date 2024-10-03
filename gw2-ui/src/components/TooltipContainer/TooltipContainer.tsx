import clsx from 'clsx';
import React, { type PropsWithChildren, type ReactElement } from 'react';
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

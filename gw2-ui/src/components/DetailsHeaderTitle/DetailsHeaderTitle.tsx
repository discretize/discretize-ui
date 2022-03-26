import clsx from 'clsx';
import React, { PropsWithChildren, ReactElement } from 'react';
import css from './DetailsHeaderTitle.module.css';

const DetailsHeaderTitle = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>): ReactElement => {
  return <div className={clsx(css.root, className)}>{children}</div>;
};

export default DetailsHeaderTitle;

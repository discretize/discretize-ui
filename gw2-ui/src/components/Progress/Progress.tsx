import clsx from 'clsx';
import React, { type ReactElement } from 'react';
import css from './Progress.module.css';

export interface ProgressProps {
  inline?: boolean;
}

const Progress = ({ inline }: ProgressProps): ReactElement => {
  return <div className={clsx(css.root, inline && css.inline)} />;
};

export default Progress;

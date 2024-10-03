import clsx from 'clsx';
import React, { type ReactElement } from 'react';
import css from './Spinner.module.css';

export interface SpinnerProps {
  inline?: boolean;
  className?: string;
}

const Spinner = ({ inline, className }: SpinnerProps): ReactElement => (
  <div className={clsx(className, inline && css.inline, css.root)} />
);

export default Spinner;

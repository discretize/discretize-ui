import * as React from 'react';
import classes from './Switch.module.css';

export interface SwitchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Switch = ({ onChange, label }: SwitchProps) => {
  return (
    <span className={classes.wrapper}>
      <label className={classes.toggle}>
        <input
          className={classes.toggle__input}
          name=""
          type="checkbox"
          onChange={onChange}
        />
        <div className={classes.toggle__fill}></div>
      </label>
      {label}
    </span>
  );
};
export default Switch;

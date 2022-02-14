import clsx from 'clsx';
import React, { PropsWithChildren, ReactElement } from 'react';
import DetailsHeaderTitle from '../DetailsHeaderTitle/DetailsHeaderTitle';
import Icon, { IconProps } from '../Icon/Icon';
import css from './DetailsHeader.module.css';

export interface DetailsHeaderFlagProps {
  icon: string;
  value: any;
}

export interface DetailsHeaderProps {
  icon?: string;
  iconProps?: IconProps;
  titleClassName?: string;
  flags?: DetailsHeaderFlagProps[];
  className?: string;
}

const DetailsHeader = ({
  icon,
  iconProps,
  titleClassName,
  flags,
  children,
  className,
}: PropsWithChildren<DetailsHeaderProps>): ReactElement => {
  return (
    <div className={clsx(className, css.root)}>
      {typeof icon === 'string' ||
      iconProps?.src ||
      iconProps?.iconViaClassname ? (
        <Icon
          src={icon}
          {...iconProps}
          className={clsx(css.icon, iconProps?.className)}
        />
      ) : (
        icon
      )}

      <DetailsHeaderTitle className={titleClassName}>
        {children}
      </DetailsHeaderTitle>

      {flags && (
        <div className={css.flagsRoot}>
          {flags.map(({ icon: flagIcon, value }) => (
            <span key={`${flagIcon}-${value}`}>
              {value}
              {flagIcon && <Icon src={flagIcon} className={css.flagsIcon} />}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailsHeader;

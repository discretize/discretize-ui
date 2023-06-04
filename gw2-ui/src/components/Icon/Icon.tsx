import clsx from 'clsx';
import React, { CSSProperties, MouseEventHandler, ReactElement } from 'react';
import Spinner from '../Spinner/Spinner';
import css from './Icon.module.css';

export interface IconProps {
  name?: 'Empty' | 'Lock' | 'Reset' | 'WeaponSwap'; // src will take priority over name
  loading?: boolean;
  disableIcon?: boolean;
  spinnerProps?: any;
  src?: string;
  zoom?: number;
  inline?: boolean;
  gutterRight?: boolean;
  gutterLeft?: boolean;
  hexagon?: boolean;
  applyCount?: number;
  inactive?: boolean;
  applyCountProps?: any;
  className?: string;
  style?: CSSProperties;
  iconViaClassname?: boolean; // indicates that the icon url is inserted via an additional className
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

const Icon = ({
  name,
  loading = false,
  spinnerProps = {},
  src,
  zoom,
  inline = true,
  gutterRight = false,
  gutterLeft = false,
  hexagon = false,
  applyCount = 1,
  inactive = false,
  applyCountProps = {},
  className,
  style: propStyle,
  onClick,
}: IconProps): ReactElement => {
  // css that is shared accross spinner and the actual component
  const sharedClassNames = clsx(
    gutterRight && css.gutterRight,
    gutterLeft && css.gutterLeft,
    inline && css.inline,
    hexagon && css.hexagon,
    inactive && css.inactive,
    className,
  );

  if (loading) {
    return (
      <Spinner inline={inline} className={sharedClassNames} {...spinnerProps} />
    );
  }

  // TODO css styles depending on props... will this work with SSR? Is this bad practice?
  // Regarding the url and withAsyncProp. I see two ways of implementing that.
  // 1. we hardcode the urls to all images in the css module (check the module, the professions are there already..). In this case we can pass the correct className from the component that implements the Icon component and dont need any other logic here.
  // 2. We use the proposed hook by marcus https://discord.com/channels/301270513093967872/841624410544930826/942213741456527390
  let style: CSSProperties = {};
  if (src) {
    style = { ...style, backgroundImage: `url('${src}')` };
  }
  if (zoom && !hexagon) {
    style = { ...style, backgroundSize: `${100 + zoom}%` };
  }

  return (
    <span
      onClick={onClick}
      className={clsx(
        sharedClassNames,
        css.root,
        (!zoom || hexagon) && css.rootBgSizeCover,
        hexagon && css.rootHexagon,
        name && css[`image${name}`],
      )}
      style={{ ...style, ...propStyle }}
    >
      {applyCount > 1 && (
        <span
          {...applyCountProps}
          className={clsx(css.applyCount, applyCountProps?.className)}
        >
          {applyCount}
        </span>
      )}
    </span>
  );
};

export default Icon;

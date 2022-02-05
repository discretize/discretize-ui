import { SxProp } from '@theme-ui/core';
import React, { FunctionComponent, ReactElement } from 'react';
import { Spinner } from '..';
import withAsyncProp from '../helpers/withAsyncProp';

export interface IconProps {
  component?: string | FunctionComponent; // https://stackoverflow.com/questions/56675652/proper-typescript-type-for-creating-jsx-element-from-string
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
  sx?: SxProp;
  style?: HTMLStyleElement;
  className?: string;
}

const Icon = ({
  component: Component = 'span',
  loading = false,
  spinnerProps = {},
  src,
  zoom,
  inline = true,
  gutterRight = false,
  gutterLeft = false,
  hexagon = false,
  applyCount,
  inactive = false,
  applyCountProps = {},
  sx,
  style,
  className,
}: IconProps): ReactElement => {
  const sharedSx = {
    ...(gutterRight && { mr: '0.25em' }),
    ...(gutterLeft && { ml: '0.25em' }),
    ...(inline && { verticalAlign: 'text-top' }),
    ...(inactive && {
      opacity: 0.5,
      willChange: 'opacity',
      transition: 'opacity 200ms',
      '&:hover': {
        opacity: 0.8,
      },
    }),
    ...(hexagon && {
      width: '0.875em',
    }),
    ...sx,
  };

  if (loading) {
    return (
      <Spinner
        inline={inline}
        {...{
          style,
          className,
        }}
        sx={{
          ...sharedSx,
        }}
        {...spinnerProps}
      />
    );
  }

  return (
    <Component
      sx={{
        display: 'inline-flex',
        size: '1em',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '0px',
        ...(src && { backgroundImage: `url('${src}')` }),
        ...(zoom && !hexagon && { backgroundSize: `${100 + zoom}%` }),
        ...((!zoom || hexagon) && { backgroundSize: 'cover' }),
        ...(hexagon && {
          clipPath:
            'polygon(50% 4%, 100% 28%, 100% 73%, 50% 99%, 0% 73%, 0% 28%)',
          borderRadius: '0px',
        }),
        ...sharedSx,
      }}
    >
      {applyCount > 1 && (
        <span
          {...applyCountProps}
          sx={{
            position: 'absolute',
            bottom: '0.2em',
            right: 0,
            fontSize: '0.5em',
            fontWeight: 'gw2.body',
            fontFamily: 'gw2.body',
            lineHeight: 1,
            color: '#fff',
            textShadow: '1px 1px 1px black',
            ...applyCountProps?.sx,
          }}
        >
          {applyCount}
        </span>
      )}
    </Component>
  );
};

Icon.displayName = 'Icon';

export default withAsyncProp(
  ({ src, name }) =>
    !src &&
    name && {
      src: import(
        `../assets/images/icons/${`${name}`
          .replace('.', '/')
          .replace(/[^\w\\/]/g, '')}.png`
      ).then(({ default: module }) => module),
    },
  ['name'],
)(Icon);

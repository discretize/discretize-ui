import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import withAsyncProp from '../helpers/withAsyncProp';
import { Spinner } from '..';

const Icon = forwardRef(
  (
    {
      component: Component,
      loading,
      spinnerProps,
      src,
      name,
      zoom,
      inline,
      gutterRight,
      gutterLeft,
      hexagon,
      applyCount,
      inactive,
      ...rest
    },
    ref,
  ) => {
    const sharedSx = {
      ...(gutterRight && { mr: '6px' }),
      ...(gutterLeft && { ml: '6px' }),
      ...(inline && { verticalAlign: 'text-top' }),
      ...(inactive && {
        opacity: 0.5,
        willChange: 'opacity',
        transition: 'opacity 200ms',
        '&:hover': {
          opacity: 0.8,
        },
      }),
    };

    if (loading) {
      return (
        <Spinner
          sx={{
            ...sharedSx,
            ...(rest.style?.fontSize && {
              fontSize: `${rest.style.fontSize}${
                typeof rest.style.fontSize === 'number' ? 'px' : ''
              }`,
            }),
          }}
          {...spinnerProps}
        />
      );
    }

    if (!src) {
      return null;
    }

    return (
      <Component
        sx={{
          display: 'inline-block',
          size: '1em',
          position: 'relative',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '0px',
          ...(src && { backgroundImage: `url('${src}')` }),
          ...(zoom && !hexagon && { backgroundSize: `${100 + zoom}%` }),
          ...((!zoom || hexagon) && { backgroundSize: 'cover' }),
          ...(hexagon && {
            width: '0.8em',
            clipPath:
              'polygon(50% 4%, 100% 28%, 100% 73%, 50% 99%, 0% 73%, 0% 28%)',
            borderRadius: '0px',
          }),
          ...sharedSx,
        }}
        {...rest}
        ref={ref}
      >
        {applyCount > 1 && (
          <span
            sx={{
              position: 'absolute',
              bottom: '0.2em',
              right: 0,
              fontSize: '0.5em',
              fontWeight: 'gw2.body',
              fontFamily: 'gw2.body',
              lineHeight: 1,
              color: '#fff',
              textShadow: '0 0 2px black',
            }}
          >
            {applyCount}
          </span>
        )}
      </Component>
    );
  },
);

Icon.propTypes = {
  component: PropTypes.elementType,
  src: PropTypes.string,
  name: PropTypes.string,
  applyCount: PropTypes.number,
  zoom: PropTypes.number,
  inline: PropTypes.bool,
  gutterRight: PropTypes.bool,
  gutterLeft: PropTypes.bool,
  hexagon: PropTypes.bool,
  inactive: PropTypes.bool,
  loading: PropTypes.bool,
  spinnerProps: PropTypes.object,
};

Icon.defaultProps = {
  component: 'span',
  src: null,
  name: null,
  applyCount: null,
  zoom: null,
  inline: true,
  gutterRight: false,
  gutterLeft: false,
  hexagon: false,
  inactive: false,
  loading: false,
  spinnerProps: {},
};

Icon.displayName = 'Icon';

export default withAsyncProp(
  ({ src, name }) =>
    !src &&
    name && {
      src: import(/* webpackMode: "eager" */ `../assets/images/icons/${name
        .replace('.', '/')
        .replace(/[^\w\\/]/g, '')}.png`).then(({ default: module }) => module),
    },
  ['name'],
)(Icon);

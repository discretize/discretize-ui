import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '../helpers';
import withAsyncProp from '../helpers/withAsyncProp';

const styles = theme => ({
  root: {
    display: 'inline-block',
    position: 'relative',
    height: '1em',
    width: '1em',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: theme.shape.borderRadius,
  },
  applyCount: {
    position: 'absolute',
    bottom: '0.2em',
    right: '0',
    fontSize: '0.5em',
    fontWeight: theme.typography.text.fontWeight,
    fontFamily: theme.typography.text.fontFamily,
    lineHeight: 1,
    color: '#fff',
    textShadow: '0 0 2px black',
  },
  noZoom: {
    backgroundSize: 'cover',
  },
  inline: {
    verticalAlign: 'text-bottom',
  },
  gutterRight: {
    marginRight: '0.25em',
  },
  gutterLeft: {
    marginLeft: '0.25em',
  },
  hexagon: {
    width: '0.8em',
    clipPath: 'polygon(50% 4%, 100% 28%, 100% 73%, 50% 99%, 0% 73%, 0% 28%)',
    borderRadius: 0,
  },
  inactive: {
    opacity: 0.5,
    willChange: 'opacity',
    transition: 'opacity 200ms',
    '&:hover': {
      opacity: 0.8,
    },
  },
});

const Icon = ({
  className,
  classes,
  component: Component,
  src,
  placeholder,
  zoom,
  inline,
  gutterRight,
  gutterLeft,
  hexagon,
  applyCount,
  inactive,
  theme,
  style,
  ...rest
}) =>
  src && (
    <Component
      className={classNames(className, classes.root, {
        [classes.noZoom]: !zoom || hexagon,
        [classes.inline]: inline,
        [classes.gutterRight]: gutterRight,
        [classes.gutterLeft]: gutterLeft,
        [classes.hexagon]: hexagon,
        [classes.inactive]: inactive,
      })}
      style={{
        ...(src
          ? {
              backgroundImage: `url("${src}")`,
            }
          : {}),
        ...(zoom && !hexagon
          ? {
              backgroundSize: `${100 + zoom}%`,
            }
          : {}),
        ...style,
      }}
      {...rest}
    >
      {applyCount > 1 && (
        <span className={classes.applyCount}>{applyCount}</span>
      )}
    </Component>
  );

Icon.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  src: PropTypes.string,
  applyCount: PropTypes.number,
  zoom: PropTypes.number,
  inline: PropTypes.bool,
  gutterRight: PropTypes.bool,
  gutterLeft: PropTypes.bool,
  hexagon: PropTypes.bool,
  inactive: PropTypes.bool,
};

Icon.defaultProps = {
  component: 'span',
  src: '',
  applyCount: null,
  zoom: null,
  inline: true,
  gutterRight: false,
  gutterLeft: false,
  hexagon: false,
  inactive: false,
};

export default withStyles(styles)(
  withAsyncProp(
    ({ src, placeholder }) =>
      !src &&
      placeholder && {
        src: import(/* webpackMode: "eager" */ `../assets/images/placeholders/${placeholder}.png`).then(
          ({ default: module }) => module,
        ),
      },
    ['placeholder'],
  )(Icon),
);

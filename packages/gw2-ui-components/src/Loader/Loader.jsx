import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '../helpers';

const ANIMATION_ID = `gw2-ui-loader-${Math.round(Math.random() * 1e5)}`;

const styles = {
  root: {
    display: 'inline-block',
    width: '1em',
    height: '1em',
    border: `4px rgba(0,0,0,0.2) solid`,
    borderTopColor: `currentColor`,
    borderRadius: '50%',
    animation: `${ANIMATION_ID} .8s linear infinite`,
  },
  [`@keyframes ${ANIMATION_ID}`]: {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
};

const Loader = ({ classes, className, component: Component, ...rest }) => (
  <Component className={classNames(className, classes.root)} {...rest} />
);

Loader.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
};

Loader.defaultProps = {
  component: 'span',
};

export default withStyles(styles)(Loader);

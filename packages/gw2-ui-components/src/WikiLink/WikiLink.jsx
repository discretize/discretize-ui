import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '../helpers';

const styles = theme => ({
  root: {
    textDecoration: 'none',
    transition: 'color 200ms ease-in-out',
  },
  colorDefault: {
    color: theme.palette.link.default,
    '&:hover': {
      color: theme.palette.link.hover,
    },
  },
  colorInherit: {
    color: 'inherit',
  },
});

const WikiLink = ({
  classes,
  className,
  component: Component,
  to,
  lang,
  color,
  ...rest
}) => (
  <Component
    className={classNames(className, classes.root, {
      [classes.colorDefault]: !color,
      [classes.colorInherit]: color === 'inherit',
    })}
    href={`https://wiki-${lang}.guildwars2.com/wiki/Special:Search/${encodeURIComponent(
      to,
    )}`}
    target="_blank"
    rel="noreferrer noopener nofollow"
    {...rest}
  >
    {to}
  </Component>
);

WikiLink.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  to: PropTypes.string.isRequired,
  lang: PropTypes.oneOf(['en']),
  color: PropTypes.oneOf(['inherit']),
};

WikiLink.defaultProps = {
  component: 'a',
  lang: 'en',
  color: null,
};

export default withStyles(styles)(WikiLink);

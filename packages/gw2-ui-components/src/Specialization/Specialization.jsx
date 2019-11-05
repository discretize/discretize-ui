import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '../helpers';
import Icon from '../Icon/Icon';
import WikiLink from '../WikiLink/WikiLink';

const styles = theme => ({
  root: {},
  icon: {},
  text: {
    ...theme.typography.text,
  },
  link: {},
  ...Object.assign(
    ...Object.entries(theme.colors.profession).map(
      ([profession, { medium, [theme.palette.link.type]: type }]) => ({
        [profession]: {
          color: medium,
          '& $link': {
            '&:hover': {
              color: type,
            },
          },
        },
      }),
    ),
  ),
});

const Specialization = ({
  data,
  classes,
  className,
  disableIcon,
  disableText,
  disableLink,
  inline,
  iconProps,
  ...rest
}) => {
  const { name, icon, profession } = data;

  const professionClass =
    profession && profession.length > 0 && classes[profession.toLowerCase()];

  return (
    <span className={classNames(className, classes.root)} {...rest}>
      {!disableIcon && (
        <Icon
          className={classes.icon}
          src={icon}
          gutterRight={!disableText}
          inline={!disableText || inline}
          iconProps={{ hexagon: true, ...iconProps }}
        />
      )}

      {!disableText && (
        <span className={classNames(classes.text, professionClass)}>
          {disableLink ? (
            name
          ) : (
            <WikiLink
              className={classNames(classes.link)}
              to={name}
              {...(professionClass
                ? {
                    color: 'inherit',
                  }
                : {})}
            />
          )}
        </span>
      )}
    </span>
  );
};

Specialization.propTypes = {
  data: PropTypes.object.isRequired,
  disableIcon: PropTypes.bool,
  disableText: PropTypes.bool,
  disableLink: PropTypes.bool,
  inline: PropTypes.bool,
  iconProps: PropTypes.object,
};

Specialization.defaultProps = {
  disableIcon: false,
  disableText: false,
  disableLink: false,
  inline: true,
  iconProps: {},
};

export default withStyles(styles)(Specialization);

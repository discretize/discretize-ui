import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '../helpers';
import Tooltip from '../Tooltip/Tooltip';
import Icon from '../Icon/Icon';
import WikiLink from '../WikiLink/WikiLink';
import SkillTooltipContent from './SkillTooltipContent';

const styles = theme => ({
  root: {},
  icon: {},
  text: {
    ...theme.typography.text,
  },
  link: {},
  tooltip: {},
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

const Skill = ({
  data,
  classes,
  className,
  disableIcon,
  disableText,
  disableLink,
  disableTooltip,
  inline,
  iconProps,
  tooltipProps,
  ...rest
}) => {
  const { name, icon, professions } = data;

  const professionClass =
    professions &&
    professions.length > 0 &&
    classes[professions[0].toLowerCase()];

  return (
    <Tooltip
      className={classes.tooltip}
      render={<SkillTooltipContent data={data} {...tooltipProps} />}
      disabled={disableTooltip}
    >
      <span className={classNames(className, classes.root)} {...rest}>
        {!disableIcon && (
          <Icon
            className={classes.icon}
            src={icon}
            zoom={5}
            gutterRight={!disableText}
            inline={!disableText || inline}
            {...iconProps}
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
    </Tooltip>
  );
};

Skill.propTypes = {
  data: PropTypes.object.isRequired,
  disableIcon: PropTypes.bool,
  disableText: PropTypes.bool,
  disableLink: PropTypes.bool,
  disableTooltip: PropTypes.bool,
  inline: PropTypes.bool,
  iconProps: PropTypes.object,
  tooltipProps: PropTypes.object,
};

Skill.defaultProps = {
  disableIcon: false,
  disableText: false,
  disableLink: false,
  disableTooltip: false,
  inline: true,
  iconProps: {},
  tooltipProps: {},
};

export default withStyles(styles)(Skill);

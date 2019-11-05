import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tooltip from '../Tooltip';
import Icon from '../Icon';
import WikiLink from '../WikiLink';
import SkillTooltipContent from '../Skill/SkillTooltipContent';
import { withStyles, specializations } from '../helpers';

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

const Trait = ({
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
  inactive,
  ...rest
}) => {
  const { name, icon, specialization } = data;

  const [profession] =
    (specialization &&
      Object.entries(specializations).find(([, specializationIds]) =>
        specializationIds.includes(specialization),
      )) ||
    [];
  const professionClass = profession && classes[profession];

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
            zoom={13}
            gutterRight={!disableText}
            inline={!disableText || inline}
            inactive={inactive}
            {...iconProps}
          />
        )}

        {!disableText && (
          <span className={classNames(classes.text, professionClass)}>
            {disableLink ? (
              name
            ) : (
              <WikiLink
                className={classes.link}
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

Trait.propTypes = {
  data: PropTypes.object.isRequired,
  disableIcon: PropTypes.bool,
  disableText: PropTypes.bool,
  disableLink: PropTypes.bool,
  disableTooltip: PropTypes.bool,
  inline: PropTypes.bool,
  iconProps: PropTypes.object,
  tooltipProps: PropTypes.object,
  inactive: PropTypes.bool,
};

Trait.defaultProps = {
  disableIcon: false,
  disableText: false,
  disableLink: false,
  disableTooltip: false,
  inline: true,
  iconProps: {},
  tooltipProps: {},
  inactive: false,
};

export default withStyles(styles)(Trait);

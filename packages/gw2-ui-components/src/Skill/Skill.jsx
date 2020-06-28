import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import withLoading from '../withLoading/index';
import Tooltip from '../Tooltip';
import IconWithText from '../IconWithText';
import WikiLink from '../WikiLink';
import AbilityDetails from '../AbilityDetails';

const Skill = forwardRef(
  (
    {
      id,
      data,
      component,
      disableIcon,
      disableText,
      disableLink,
      disableTooltip,
      inline,
      tooltipProps,
      wikiLinkProps,
      ...rest
    },
    ref,
  ) => {
    const { name, icon, professions } = data;

    const profession = professions?.length && professions[0].toLowerCase();

    return (
      <Tooltip
        content={<AbilityDetails data={data} />}
        disabled={disableTooltip}
        {...tooltipProps}
      >
        <IconWithText
          component={component}
          icon={icon}
          text={
            disableLink ? (
              name
            ) : (
              <WikiLink
                to={name}
                {...wikiLinkProps}
                sx={{
                  color: 'inherit',
                  '&:hover': { color: `profession.${profession}.dark` },
                  ...wikiLinkProps?.sx,
                }}
              />
            )
          }
          disableIcon={disableIcon}
          disableText={disableText}
          inline={inline}
          {...rest}
          iconProps={{ zoom: 5, ...rest.iconProps }}
          sx={{
            color: `profession.${profession}.medium`,
            ...rest.sx,
          }}
          ref={ref}
        />
      </Tooltip>
    );
  },
);

Skill.propTypes = {
  id: PropTypes.number,
  component: PropTypes.elementType,
  data: PropTypes.object.isRequired,
  disableIcon: PropTypes.bool,
  disableText: PropTypes.bool,
  disableLink: PropTypes.bool,
  disableTooltip: PropTypes.bool,
  inline: PropTypes.bool,
  tooltipProps: PropTypes.object,
  wikiLinkProps: PropTypes.object,
};

Skill.defaultProps = {
  id: null,
  component: undefined,
  disableIcon: false,
  disableText: false,
  disableLink: false,
  disableTooltip: false,
  inline: true,
  tooltipProps: {},
  wikiLinkProps: {},
};

Skill.displayName = 'Skill';

export default withLoading()(Skill);

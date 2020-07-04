import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import withLoading from '../withLoading/index';
import IconWithText from '../IconWithText';
import WikiLink from '../WikiLink';
import { useColorModeHighlightSuffix } from '../helpers';

const Specialization = forwardRef(
  (
    {
      id,
      data,
      component,
      disableIcon,
      disableText,
      disableLink,
      inline,
      wikiLinkProps,
      ...rest
    },
    ref,
  ) => {
    const highlightSuffix = useColorModeHighlightSuffix();

    const { name, icon, profession } = data;

    return (
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
                '&:hover': {
                  color: `gw2.profession.${profession.toLowerCase()}${highlightSuffix}`,
                },
                ...wikiLinkProps?.sx,
              }}
            />
          )
        }
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        {...rest}
        iconProps={{ hexagon: true, ...rest.iconProps }}
        sx={{
          color: `gw2.profession.${profession.toLowerCase()}`,
          ...rest.sx,
        }}
        ref={ref}
      />
    );
  },
);

Specialization.propTypes = {
  id: PropTypes.number,
  component: PropTypes.elementType,
  data: PropTypes.object.isRequired,
  disableIcon: PropTypes.bool,
  disableText: PropTypes.bool,
  disableLink: PropTypes.bool,
  inline: PropTypes.bool,
  wikiLinkProps: PropTypes.object,
};

Specialization.defaultProps = {
  id: null,
  component: undefined,
  disableIcon: false,
  disableText: false,
  disableLink: false,
  inline: true,
  wikiLinkProps: {},
};

Specialization.displayName = 'Specialization';

export default withLoading()(Specialization);

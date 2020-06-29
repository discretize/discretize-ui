import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';
import DetailsHeader from '../DetailsHeader';
import DetailsText from '../DetailsText';
import IconWithText from '../IconWithText';

const Error = forwardRef(
  (
    {
      component,
      name,
      message,
      code,
      disableTooltip,
      disableIcon,
      disableText,
      inline,
      tooltipProps,
      ...rest
    },
    ref,
  ) => (
    <Tooltip
      content={
        <>
          <DetailsHeader
            iconProps={{ name: code }}
            titleProps={{ sx: { color: 'error' } }}
          >
            {name}
          </DetailsHeader>
          <DetailsText>
            {message}
            {code && ` (code ${code})`}
          </DetailsText>
        </>
      }
      disabled={disableTooltip}
      {...tooltipProps}
    >
      <IconWithText
        component={component}
        text={name}
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        {...rest}
        iconProps={{ name: code, ...rest.iconProps }}
        sx={{ color: 'error', ...rest.sx }}
        ref={ref}
      />
    </Tooltip>
  ),
);

Error.propTypes = {
  component: PropTypes.elementType,
  code: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.string,
  disableIcon: PropTypes.bool,
  disableText: PropTypes.bool,
  disableTooltip: PropTypes.bool,
  inline: PropTypes.bool,
  tooltipProps: PropTypes.object,
};

Error.defaultProps = {
  component: undefined,
  code: null,
  name: null,
  message: null,
  disableIcon: false,
  disableText: false,
  disableTooltip: false,
  inline: true,
  tooltipProps: {},
};

Error.displayName = 'Error';

export default Error;

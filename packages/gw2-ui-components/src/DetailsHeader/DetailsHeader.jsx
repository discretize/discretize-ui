import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import DetailsHeaderTitle from '../DetailsHeaderTitle';

const DetailsHeader = forwardRef(
  ({ icon, iconProps, titleProps, flags, children, ...rest }, ref) => (
    <div
      sx={{ display: 'flex', flexDirection: 'row', mb: '3px' }}
      {...rest}
      ref={ref}
    >
      {typeof icon === 'string' || iconProps?.src || iconProps?.name ? (
        <Icon
          src={icon}
          {...iconProps}
          sx={{
            fontSize: '32px',
            mr: '6px',
            border: '1px solid #cfd0d0',
            borderRadius: '0px',
            ...iconProps.sx,
          }}
        />
      ) : (
        icon
      )}

      <DetailsHeaderTitle {...titleProps}>{children}</DetailsHeaderTitle>

      {flags && (
        <div sx={{ ml: '6px' }}>
          {flags.map(({ icon: flagIcon, value }) => (
            <span key={`${flagIcon}-${value}`}>
              {value}
              {flagIcon && <Icon src={flagIcon} sx={{ ml: '2px' }} />}
            </span>
          ))}
        </div>
      )}
    </div>
  ),
);

DetailsHeader.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconProps: PropTypes.object,
  titleProps: PropTypes.object,
  flags: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      value: PropTypes.node,
    }),
  ),
};

DetailsHeader.defaultProps = {
  icon: null,
  iconProps: {},
  titleProps: {},
  flags: [],
};

DetailsHeader.displayName = 'DetailsHeader';

export default DetailsHeader;

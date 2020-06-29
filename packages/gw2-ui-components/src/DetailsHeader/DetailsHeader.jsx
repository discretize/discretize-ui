import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import DetailsHeaderTitle from '../DetailsHeaderTitle';

const DetailsHeader = forwardRef(
  ({ icon, iconProps, titleProps, flags, children, ...rest }, ref) => (
    <div
      sx={{ display: 'flex', flexDirection: 'row', marginBottom: 2 }}
      {...rest}
      ref={ref}
    >
      {typeof icon === 'string' || iconProps?.src || iconProps?.name ? (
        <Icon
          src={icon}
          {...iconProps}
          sx={{
            fontSize: 5,
            marginRight: 3,
            border: '1px solid rgba(255,255,255,0.38)',
            borderRadius: 1,
            ...iconProps.sx,
          }}
        />
      ) : (
        icon
      )}

      <DetailsHeaderTitle {...titleProps}>{children}</DetailsHeaderTitle>

      {flags && (
        <div sx={{ marginLeft: 3 }}>
          {flags.map(({ icon: flagIcon, value }) => (
            <span key={`${flagIcon}-${value}`}>
              {value}
              {flagIcon && <Icon src={flagIcon} sx={{ marginLeft: 1 }} />}
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

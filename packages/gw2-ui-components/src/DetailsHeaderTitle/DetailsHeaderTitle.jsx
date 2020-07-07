import React, { forwardRef } from 'react';

const DetailsHeaderTitle = forwardRef(({ children, ...rest }, ref) => (
  <div
    sx={{
      color: 'gw2.details.title',
      fontSize: '16px',
      fontFamily: 'gw2.heading',
      fontWeight: 'gw2.heading',
      flexGrow: 1,
      alignSelf: 'center',
      lineHeight: 'gw2.heading',
    }}
    {...rest}
    ref={ref}
  >
    {children}
  </div>
));

DetailsHeaderTitle.displayName = 'DetailsHeaderTitle';

export default DetailsHeaderTitle;

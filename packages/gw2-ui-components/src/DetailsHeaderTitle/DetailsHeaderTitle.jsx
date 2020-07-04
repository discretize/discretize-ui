import React, { forwardRef } from 'react';

const DetailsHeaderTitle = forwardRef(({ children, ...rest }, ref) => (
  <div
    sx={{
      color: 'gw2.details.title',
      fontSize: '16px',
      fontFamily: 'gw2.heading',
      fontWeight: 'gw2.heading',
      textShadow: '2px 2px 2px rgb(9, 10, 14)',
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

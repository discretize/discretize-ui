import React, { forwardRef } from 'react';

const DetailsHeaderTitle = forwardRef(({ children, ...rest }, ref) => (
  <div
    sx={{
      color: 'details.title',
      fontSize: 2,
      fontWeight: 'heading',
      textShadow: '2px 2px 2px rgb(9, 10, 14)',
      flexGrow: 1,
      alignSelf: 'center',
      lineHeight: 'heading',
    }}
    {...rest}
    ref={ref}
  >
    {children}
  </div>
));

DetailsHeaderTitle.displayName = 'DetailsHeaderTitle';

export default DetailsHeaderTitle;

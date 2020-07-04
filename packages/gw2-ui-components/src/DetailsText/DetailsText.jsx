import React, { forwardRef } from 'react';

const DetailsText = forwardRef(({ children, ...rest }, ref) => (
  <div
    sx={{ whiteSpace: 'pre-wrap', lineHeight: 'gw2.heading' }}
    {...rest}
    ref={ref}
  >
    {children}
  </div>
));

DetailsText.displayName = 'DetailsText';

export default DetailsText;

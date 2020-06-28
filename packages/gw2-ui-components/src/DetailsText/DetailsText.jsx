import React, { forwardRef } from 'react';

const DetailsText = forwardRef(({ children, ...rest }, ref) => (
  <div sx={{ whiteSpace: 'pre-wrap', lineHeight: 'dense' }} {...rest} ref={ref}>
    {children}
  </div>
));

DetailsText.displayName = 'DetailsText';

export default DetailsText;

import React, { forwardRef } from 'react';

import tooltipBackgroundImage from '../assets/images/tooltip-background.png';

const TooltipContainer = forwardRef(({ children, ...rest }, ref) => (
  <div
    sx={{
      backgroundColor: '#000',
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: 'border',
      boxShadow:
        '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
      padding: 2,
      backgroundPosition: 'top left',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${tooltipBackgroundImage})`,
      color: 'tooltip',
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'body',
      lineHeight: 'body',
      borderRadius: 1,
    }}
    {...rest}
    ref={ref}
  >
    {children}
  </div>
));

TooltipContainer.displayName = 'TooltipContainer';

export default TooltipContainer;

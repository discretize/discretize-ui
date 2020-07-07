import React, { forwardRef } from 'react';

import tooltipBackgroundImage from '../assets/images/tooltip-background.png';

const TooltipContainer = forwardRef(({ children, ...rest }, ref) => (
  <div
    sx={{
      backgroundColor: 'rgba(46, 53, 56, 0.7)',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: '#040505',
      boxShadow:
        '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
      p: '4px',
      backgroundPosition: 'top left',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${tooltipBackgroundImage})`,
      color: '#fff',
      fontFamily: 'gw2.body',
      fontSize: '14px',
      fontWeight: 'gw2.body',
      lineHeight: 'gw2.heading',
      borderRadius: '0px',
      textShadow: '1px 1px 1px #010101',
      maxWidth: 300,
      whiteSpace: 'pre-wrap',
    }}
    {...rest}
    ref={ref}
  >
    {children}
  </div>
));

TooltipContainer.displayName = 'TooltipContainer';

export default TooltipContainer;

import React from 'react';
import injectSheet from 'react-jss';

import { getDisplayName } from '.';

export default styles => Component => {
  const WithStyles = ({ classes: userClasses = {}, sheet, ...props }) => {
    const { classes: sheetClasses } = sheet;

    const mergedClasses = {
      ...sheetClasses,
      ...Object.keys(userClasses).reduce((target, key) => {
        const additionalValue = userClasses[key];

        if (additionalValue) {
          // eslint-disable-next-line no-param-reassign
          target[key] = `${sheetClasses[key]} ${additionalValue}`;
        }

        return target;
      }, {}),
    };

    return <Component {...props} classes={mergedClasses} />;
  };

  WithStyles.displayName = `WithStyles(${getDisplayName(Component)})`;

  return injectSheet(styles, { inject: ['theme', 'sheet'] })(WithStyles);
};

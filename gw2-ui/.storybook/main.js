const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
  ],
  framework: '@storybook/react',
};

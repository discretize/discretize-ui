const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    if (configType !== 'DEVELOPMENT') {
      return config;
    }
    config.resolve = { ...config.resolve };
    config.resolve.alias = { ...config.resolve.alias };
    config.resolve.alias['@discretize/gw2-ui-new'] = path.resolve(
      path.join(__dirname, '..', '..', 'gw2-ui', 'src', 'index'),
    );
    console.log(config);
    return config;
  },
};

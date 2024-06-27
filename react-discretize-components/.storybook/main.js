import { dirname, join } from 'node:path';

const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('storybook-css-modules-preset'),
    '@storybook/addon-webpack5-compiler-babel',
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },
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
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

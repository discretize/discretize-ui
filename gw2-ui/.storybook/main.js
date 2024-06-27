import { dirname, join } from 'node:path';

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('storybook-css-modules-preset'),
    '@storybook/addon-webpack5-compiler-babel'
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },

  docs: {},
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

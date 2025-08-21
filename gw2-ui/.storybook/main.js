import { dirname, join } from 'node:path';

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('storybook-css-modules-preset'),
    '@storybook/addon-webpack5-compiler-babel',
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

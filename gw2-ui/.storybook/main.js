import { dirname, join } from 'node:path';

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('storybook-css-modules-preset'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {},
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

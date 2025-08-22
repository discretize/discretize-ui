import path from 'node:path';

export default {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-webpack5-compiler-babel'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    // if (configType !== 'DEVELOPMENT') {
    //   return config;
    // }
    config.resolve = { ...config.resolve };
    config.resolve.alias = { ...config.resolve.alias };
    config.resolve.alias['@discretize/gw2-ui-new'] = path.resolve(
      path.join(__dirname, '..', '..', 'gw2-ui', 'src', 'index'),
    );
    // console.log(config);
    return config;
  },
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

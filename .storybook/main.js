const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    // https://webpack.js.org/loaders/css-loader/#pure-css-css-modules-and-postcss
    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== '/\\.css$/',
    );
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true, // Enable modules to help you using className
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  },
};

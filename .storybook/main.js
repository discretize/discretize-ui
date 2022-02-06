const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    // To compile code written in the old monorepo structure without adjusting all the imports, we add some webpack aliases here
    let alias = { ...(config.resolve.alias || {}) };
    alias['gw2-ui-bulk'] = path.resolve(
      path.join(__dirname, '..', 'packages', 'gw2-ui', 'src', 'index.js'),
    );
    alias['gw2-ui-builder-bulk'] = path.resolve(
      path.join(
        __dirname,
        '..',
        'packages',
        'gw2-ui-builder',
        'src',
        'index.ts',
      ),
    );
    alias['gw2-ui-components-bulk'] = path.resolve(
      path.join(
        __dirname,
        '..',
        'packages',
        'gw2-ui-components',
        'src',
        'index.ts',
      ),
    );
    alias['gw2-ui-redux-bulk'] = path.resolve(
      path.join(__dirname, '..', 'packages', 'gw2-ui-redux', 'src', 'index.ts'),
    );
    config.resolve.alias = alias;
    return config;
  },
  babel: async (options) => {
    // Hack the Babel config to use theme-ui
    for (let p of options.presets) {
      if (p instanceof Array) {
        if (p[0].match(/\/@babel\/preset-react\//)) {
          console.log(p[0], p[1]);
          p[1].importSource = 'theme-ui';
        }
      }
    }
    return options;
  },
};

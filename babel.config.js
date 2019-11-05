module.exports = {
  sourceMaps: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: ['last 4 versions', 'safari >= 7', 'ie >= 9'],
        useBuiltIns: 'usage',
        corejs: 3,
        loose: true,
        modules: process.env.BABEL_ENV === 'es' ? false : 'commonjs',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: process.env.BABEL_ENV === 'es',
      },
    ],
  ],
};

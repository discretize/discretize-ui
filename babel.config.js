module.exports = {
  sourceMaps: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: ['last 4 versions', 'safari >= 7', 'ie >= 9'],
        modules: process.env.BABEL_ENV === 'es' ? false : 'commonjs',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};

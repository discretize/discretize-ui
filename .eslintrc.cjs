module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    //'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint'],
  ignorePatterns: ['.storybook', 'dist'],
  rules: {
    'lines-between-class-members': 'off',
    // Re-enable i++, iterators and continue
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-plusplus': 'off',
    'no-continue': 'off',
    'no-param-reassign': ['error', { props: false }],
    // These should be downgraded to warnings until we fix all of them.
    'prefer-const': 'warn',
    'prefer-destructuring': 'warn',
    // We like to specify imports without an extension
    /*
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    */
    // Many of our variables are snake_case. That's fine.
    camelcase: 'off',
    // Modern jsx transforms no longer need this
    'react/react-in-jsx-scope': 'off',
    // Default props are a relic of the past
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    // Being explicit about types is not a problem
    '@typescript-eslint/no-inferrable-types': 'off',

    '@typescript-eslint/no-explicit-any': 'off',

    /*
    'import/no-extraneous-dependencies': 'warn',
    'react/prop-types': 'warn',
    'react/forbid-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-indent': 'off',
*/
  },
};

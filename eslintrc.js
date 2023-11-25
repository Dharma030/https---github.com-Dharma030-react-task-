module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      // Add or customize rules as needed
      'jsx-a11y/img-redundant-alt': 'off', // Disable the specific rule causing the warning
      // Other rules...
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  
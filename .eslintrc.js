module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
    'next',
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
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': [1, {
      exceptions: ['./src/pages/*.tsx', './pages'],
    }],
    'react/function-component-definition': 0,
    'max-len': ['error', { code: 80, ignoreUrls: true }],
    'no-console': 1,
    'import/extensions': 0,
    'import/no-anonymous-default-export': 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
};

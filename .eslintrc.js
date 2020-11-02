module.exports = {
  ecmaFeatures: {
    modules: true,
    spread: true,
    restParams: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'linebreak-style': ['error', 'windows'],
    'import/prefer-default-export': 'off',
  },
};

module.exports = {
  extends: 'airbnb-typescript',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
  },
};

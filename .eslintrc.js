module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    curly: 'error',
    camelcase: ['error'],
    eqeqeq: ['error', 'smart'],
  },
};

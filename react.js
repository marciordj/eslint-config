module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
    'import',
    'unused-imports',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/typescript',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 80,
        singleQuote: true,
        arrowParens: 'always',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'type',
          'object',
        ],
        'newlines-between': 'always',
        pathGroups: [{ pattern: 'react', group: 'external' }],
      },
    ],
    'no-console': 'error',
    'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
  },
};

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', "@typescript-eslint"],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // React

    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',

    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // TypeScript
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
    '@typescript-eslint-in-jsx-scope': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',

    // Outros
    semi: ['error', 'always'],
    'no-console': 'warn',
    'eslint-disable-next-line': 'off',
    'react/display-name': 'off',
    'prettier/prettier': [
      'warn',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'default-case': 'error',
    yoda: 'warn',
    'wrap-iife': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    strict: 'error',
    'block-scoped-var': 'warn',
    'require-await': 'error',
    'no-unreachable': 'warn',
    eqeqeq: 'error',
    endOfLine: 'off',
  },
};

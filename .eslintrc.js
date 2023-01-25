module.exports = {
  root: true,

  overrides: [
    // Client files
    {
      files: ['apps/**/src/*.{j,t}s?(x)'],
      extends: ['eslint:recommended'],
      plugins: ['react-hooks'],
      rules: {
        'react-hooks/rules-of-hooks': 1,
        'react-hooks/exhaustive-deps': 1,
      },
    },

    /**
     * TypeScript files.
     *
     * NOTE:
     * Has to be last to set the proper parser for files that are covered above.
     */
    {
      files: ['apps/**/src/**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        // It's best in some cases to let the TS compiler infer the return type.
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
    },
  ],
};

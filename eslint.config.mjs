import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', '*.d.ts'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...vue.configs['flat/recommended'],
    ],
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    plugins: {
      vue,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  prettier
);

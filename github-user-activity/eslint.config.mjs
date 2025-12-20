import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, import: importPlugin },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.node } },
  },
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
    rules: {
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    },
  },
  eslintPluginPrettierRecommended,
]);

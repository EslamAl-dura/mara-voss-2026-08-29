import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

// Flat ESLint config (ESM) compatible with "type": "module"
// Uses the official @eslint/js base, the @typescript-eslint plugin/parser, and recommended rules
export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: { '@typescript-eslint': tsPlugin, 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    rules: {
      // Include recommended rules from the TypeScript plugin if available
      ...((tsPlugin && tsPlugin.configs && tsPlugin.configs.recommended && tsPlugin.configs.recommended.rules) || {}),
      // React Hooks recommended rules
      ...((reactHooks && reactHooks.configs && reactHooks.configs.recommended && reactHooks.configs.recommended.rules) || {}),
      // react-refresh rule configuration
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Enforce no-unused-vars but allow underscore-prefixed args
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  }
];
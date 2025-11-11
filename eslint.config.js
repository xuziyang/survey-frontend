import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginTs from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  // Prettier 配置
  {
    files: ['**/*.{js,jsx,ts,tsx,json,css,scss,md}'],
    plugins: {
      prettier: pluginPrettier
    },
    rules: {
      // Extend Prettier's recommended rules
      ...configPrettier.rules,
      // Prettier specific rules and formatting options
      'prettier/prettier': ['error', {
        singleQuote: true,      // Use single quotes instead of double quotes
        semi: true,             // Add semicolons at the end of statements
        trailingComma: 'es5',   // Add trailing commas where valid in ES5
        printWidth: 100,        // Line wrap at 100 characters
        tabWidth: 2            // Use 2 spaces for indentation
      }]
    }
  },
  // JavaScript 基础配置 - 使用 pluginJs
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...pluginJs.configs.recommended,  // 使用 ESLint 推荐规则
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error'
    }
  },

  // React 配置
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: pluginReact
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // React 推荐规则
      ...pluginReact.configs.recommended.rules,
      // 自定义规则
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger': 'warn',
      'react/no-deprecated': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-pascal-case': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }]
    }
  },

  // React Hooks 配置
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      'react-hooks': pluginReactHooks
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules
    }
  },

  // TypeScript 配置
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': pluginTs
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2021,
        sourceType: 'module'
      }
    },
    rules: {
      // TypeScript 推荐规则
      ...pluginTs.configs.recommended.rules,
      // 自定义规则
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'ignoreRestSiblings': true
      }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-const': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I']
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase']
        },
        {
          selector: 'enum',
          format: ['PascalCase']
        }
      ]
    }
  },

  // 测试文件配置
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off'
    }
  },

  // 配置文件配置
  {
    files: ['eslint.config.js', 'vite.config.{js,ts}', 'webpack.config.js'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }
];
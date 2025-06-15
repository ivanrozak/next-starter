import antfu from '@antfu/eslint-config'
import nextPlugin from '@next/eslint-plugin-next'
import reactRefresh from 'eslint-plugin-react-refresh'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    typescript: true,
    react: true,
    // node: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
    },
    jsonc: false,
    yaml: false,
    ignores: ['node_modules', '.next', 'public', 'out', '*.d.ts'],
  },
  {
    plugins: {
      '@next/next': nextPlugin,
      'tailwindcss': tailwind,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'tailwindcss/classnames-order': 'error', // Disabled for performance
      'tailwindcss/no-custom-classname': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': 'warn',
      'node/prefer-global/process': 'off', // Allow using `process.env`
      'no-undef': 'off',
    },
    settings: {
      tailwindcss: {
        config: './tailwind.config.ts',
        cssFiles: ['./src/app/**/*.css'],
      },
    },
  },
)

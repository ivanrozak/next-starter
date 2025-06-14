import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';
import reactRefresh from 'eslint-plugin-react-refresh';
import tailwind from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    typescript: true,
    react: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
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
      'tailwindcss/classnames-order': 'off', // Disabled for performance
      'tailwindcss/no-custom-classname': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    settings: {
      tailwindcss: {
        config: './tailwind.config.ts',
        cssFiles: ['./src/app/**/*.css'],
      },
    },
  },
);

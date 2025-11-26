import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(), // Tailwind/Windi CSS compatible utilities
    presetAttributify(), // Attributify mode for better DX
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  shortcuts: {
    // Custom shortcuts for common patterns
    btn: 'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer transition-colors',
    'btn-secondary':
      'px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer transition-colors',
    card: 'bg-white rounded-lg shadow-md p-4',
    input:
      'px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500',
  },
  theme: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
    },
  },
});

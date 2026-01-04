import { resolve } from 'path';

export default {
  root: resolve(__dirname, 'src'),
  base: '/bootstrap3/', // ← ОБЯЗАТЕЛЬНО: замените на имя вашего репозитория!
  build: {
    outDir: resolve(__dirname, 'dist'), // лучше использовать resolve
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html'), // явно укажите входной HTML
    },
  },
  server: {
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin',
        ],
      },
    },
  },
};

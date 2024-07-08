// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'main.ts'),
            name: 'main',
            fileName: (format) => `main.${format}.js`,
          },
          outDir: 'dist',
        //   rollupOptions: {
        //     input: {
        //         main: path.resolve(__dirname, 'index.html'),
        //     }
        // }
    },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
});

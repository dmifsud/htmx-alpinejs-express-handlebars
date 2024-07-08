// vite.config.ts
import { defineConfig, loadEnv } from "vite";
import path from "path";

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    server: {
      port: Number(env.VITE_PORT),
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/main.ts"),
        name: "main",
        fileName: (format) => `main.${format}.js`,
      },
      outDir: "dist",
      //   rollupOptions: {
      //     input: {
      //         main: path.resolve(__dirname, 'index.html'),
      //     }
      // }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      postcss: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  });
};

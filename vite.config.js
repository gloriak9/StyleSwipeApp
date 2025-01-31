import path from 'path';
import framework7 from 'rollup-plugin-framework7';

const SRC_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './www');

export default async () => {
  return {
    plugins: [
      framework7({ emitCss: false }),
    ],
    root: SRC_DIR,
    base: '',
    publicDir: PUBLIC_DIR,
    build: {
      outDir: BUILD_DIR,
      assetsInlineLimit: 0,
      emptyOutDir: true,
      rollupOptions: {
        treeshake: false,
      },
    },
    resolve: {
      alias: {
        '@': SRC_DIR,
      },
    },
    server: {
      host: true,
      proxy: {
        '/api/zara': {
          target: 'https://app.retailed.io/api/v1/scraper',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/zara/, '/zara')
        }
      }
    },
    esbuild: {
      jsxFactory: '$jsx',
      jsxFragment: '"Fragment"',
    },
  };
}
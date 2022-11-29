import { defineConfig, splitVendorChunkPlugin } from 'vite';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config
export default defineConfig({
    base: '/rmg-translate/',
    plugins: [checker({ typescript: true, eslint: { lintCommand: 'eslint ./src ./ui' } }), splitVendorChunkPlugin()],
    build: {
        outDir: 'build',
    },
});

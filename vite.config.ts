import { defineConfig, splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
    base: '/rmg-translate/',
    plugins: [splitVendorChunkPlugin()],
    build: {
        outDir: 'build',
    },
});

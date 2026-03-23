import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Mock Figma Assets Plugin
var figmaAssetPlugin = {
    name: 'mock-figma-assets',
    resolveId: function (id) {
        if (id.includes('figma:asset/')) {
            return id;
        }
    },
    load: function (id) {
        if (id.includes('figma:asset/')) {
            // Return placeholder image URL
            return "export default \"https://placehold.co/600x400/3D4539/C9A961?text=Image\"";
        }
    }
};
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), figmaAssetPlugin],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    server: {
        port: 5173,
        strictPort: false,
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
    },
});

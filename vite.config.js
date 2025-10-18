import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    optimizeDeps: {
        include: [
            '@react-aria/utils',
            '@react-aria/focus',
            '@react-aria/interactions',
            '@headlessui/react',
        ],
    },
    build: {
        commonjsOptions: {
            include: [/node_modules/],
        },
    },
});

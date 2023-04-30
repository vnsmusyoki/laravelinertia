import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.js', 'resources/css/app.css', 'resources/css/app.min.css', 'resources/css/bootstrap.min.css', 'resources/css/icons.min.css', 'resources/css/preloader.min.css',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false
                }
            }
        }),
    ],
});

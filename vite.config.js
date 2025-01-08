import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                portfolio: 'src/pages/portfolio-item.html',
				js: 'src/js/index.js'
            },
        },
    },
});
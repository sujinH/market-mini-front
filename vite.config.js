import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		host: '127.0.0.1',
		port: 5173,
		origin: 'http://127.0.0.1:5173',
		proxy: {
			'/api': {
				target: 'https://www.etereocare.com',
				changeOrigin: true,
				withCredentials: true,
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});

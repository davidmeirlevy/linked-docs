import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [vue()],
	build: {
		target: 'esnext',
		lib: {
			entry: './src/index.ts',
			name: 'LinkedItems',
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['vue'],
		}
	},
});

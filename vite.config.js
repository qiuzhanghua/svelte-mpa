import path from 'path'
import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
	resolve: {
		alias: [{find: "@", replacement: "./src"}],
	},
	plugins: [svelte()],
	build: {
		rollupOptions: {
			input: {
				home: path.resolve('src/main.js'),
				admin: '@/admin/main.js',
			}
		}
	}
})

import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {resolve} from 'path'

export default defineConfig({
	resolve: {
		alias: [{find: "@", replacement: "./src"}],
	},
	plugins: [svelte()],
	build: {
		rollupOptions: {
			input: {
				home: resolve('index.html'),
				admin: resolve('admin/index.html'),
			}
		}
	}
})

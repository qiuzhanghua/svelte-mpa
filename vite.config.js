import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {resolve} from 'path'
import sveltePreprocess from 'svelte-preprocess'
import makeAttractionsImporter from 'attractions/importer.js'

export default defineConfig({
	resolve: {
		alias: [{find: "@", replacement: "./src"}],
	},
	plugins: [svelte({
			preprocess: [
				sveltePreprocess({
					scss: {
						importer: makeAttractionsImporter({
							themeFile: resolve('static/css/theme.scss'),
						}),
						includePaths: [resolve('./static/css')],
					},
				}),
			],
		}
	)],
	build: {
		rollupOptions: {
			input: {
				home: resolve('index.html'),
				admin: resolve('admin/index.html'),
			}
		}
	}
})

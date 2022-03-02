# Svelte + Vite + MPA

This is a simple MPA Application, but it does not work, would vitejs support svelte+MPA?


vite.config.js
```javascript
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

```

1. Why MPA not work?
2. Why alias not work?
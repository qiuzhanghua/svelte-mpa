<main>
	<h1>Admin Page</h1>
	<a href="/">Home</a>
	<div>main color is green now</div>
</main>

<style lang="scss">
	/* because the directory of `theme.scss` is in `includePaths` */
	@use 'theme.scss';

	div {
		color: theme.$main;
	}
</style>


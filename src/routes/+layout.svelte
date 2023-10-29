<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="bg-white dark:bg-gray-800 h-screen">
	<Header />
	<main class="grow bg-white dark:bg-gray-800">
		<slot />
	</main>
</div>

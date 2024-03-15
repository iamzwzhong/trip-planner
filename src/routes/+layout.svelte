<script>
	import '../app.postcss';
	import Header from '../lib/components/Header.svelte';
</script>

<div class="h-screen bg-white dark:bg-gray-800">
	<Header />
	<main class="grow bg-white dark:bg-gray-800">
		<slot />
	</main>
</div>

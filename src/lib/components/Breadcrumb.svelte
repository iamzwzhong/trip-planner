<script>
	import { page } from '$app/stores';
	import { capitalize } from '$lib/utils/Utils';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { GlobeSolid } from 'flowbite-svelte-icons';

	export let pathToLabel = new Map();
	$: tokens = $page.url.pathname.split('/').filter((t) => t !== '');
	let tokenPath = '';
	$: {
		resetTokenPath();
	}
	$: crumbs = tokens.map((t) => {
		const label = pathToLabel.has(t) ? pathToLabel.get(t) : t;
		tokenPath += '/' + t;
		return {
			label: capitalize(label),
			href: tokenPath
		};
	});
	const resetTokenPath = () => {
		tokenPath = '';
	};
</script>

<Breadcrumb>
	{#each crumbs as c, i}
		{#if i == 0}
			<BreadcrumbItem href={c.href} home>
				<svelte:fragment slot="icon">
					<GlobeSolid class="me-2 h-4 w-4" />
				</svelte:fragment>
				{c.label}
			</BreadcrumbItem>
		{:else}
			<BreadcrumbItem href={c.href}>{c.label}</BreadcrumbItem>
		{/if}
	{/each}
</Breadcrumb>

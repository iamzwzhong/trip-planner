<script lang="ts">
	import { A, Img, P } from 'flowbite-svelte';
	import { toDisplayDate } from '$lib/utils/Utils';

	export let url: string;
	export let tripImage: string;
	export let tripName: string;
	export let startDate: Date;
	export let endDate: Date;
</script>

<A href={url} class="w-fit hover:no-underline">
	<div
		class="relative flex max-w-sm flex-col border-4 border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:border-gray-500 dark:shadow-gray-700 lg:max-w-lg"
	>
		<Img class="h-64 w-96 object-cover lg:h-80 lg:w-[512px]" src={tripImage} alt={tripName} />
		<div class="absolute w-full bg-gradient-to-r from-gray-500/50 to-black/50 uppercase">
			<P weight="bold" size="3xl" color="text-white" class="text-center tracking-tighter"
				>{tripName}</P
			>
			<P weight="bold" size="sm" color="text-white" class="text-center tracking-tighter"
				>{toDisplayDate(startDate) + ' - ' + toDisplayDate(endDate)}</P
			>
		</div>
	</div>
</A>

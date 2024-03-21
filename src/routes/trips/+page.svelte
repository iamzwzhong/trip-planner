<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import TripCard from '$lib/components/TripCard.svelte';
	import { Toaster } from 'svelte-french-toast';

	export let data;
	$: trips = data.trips;
</script>

<Toaster />
<section>
	<div class="max-w-8xl mx-auto px-4 pt-4 lg:px-20">
		<Breadcrumb />
	</div>
</section>
<section>
	<div class="max-w-8xl mx-auto px-4 py-4 align-middle lg:px-20">
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
			{#each trips as trip}
				<TripCard
					url={'/trips/' + trip.id}
					tripName={trip.tripName}
					tripImage={trip.photo}
					startDate={trip.startDate}
					endDate={trip.endDate}
				/>
			{/each}
		</div>
	</div>
</section>

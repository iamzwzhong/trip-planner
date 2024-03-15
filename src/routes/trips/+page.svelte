<script lang="ts">
	import { enhance } from '$app/forms';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import TripCard from '$lib/components/TripCard.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { Button, Datepicker, Input } from 'flowbite-svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	export let data;
	$: trips = data.trips;

	const submitCreateTrip: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Trip added!');
					break;
				case 'failure':
					toast.error(result.data?.errorMsg);
					break;
				default:
					break;
			}
			await update({ reset: false });
		};
	};
</script>

<Toaster />
<form method="POST" action="?/addTrip" use:enhance={submitCreateTrip} hidden>
	<Input type="text" name="tripName" placeholder="Japan" required />
	<Datepicker range datepickerButtons />
	<Input type="url" name="photo" required />
	<Button color="green">Add</Button>
</form>
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

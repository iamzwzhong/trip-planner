<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import { Toaster } from 'svelte-french-toast';
	import AddEventButton from '$lib/components/AddEventButton.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { Button, Drawer } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import EventForm from '$lib/components/EventForm.svelte';

	export let data;
	$: events = data.events;
	$: trip = data.trip;
	$: labelMap = new Map([[trip.id, trip.tripName]]);

	let drawerHidden = true;
	const transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

	const t: SubmitFunction = () => {};
</script>

<Toaster />
<div class="text-center">
	<Button on:click={() => (drawerHidden = false)}>Show drawer form</Button>
</div>
<Drawer transitionType="fly" {transitionParams} bind:hidden={drawerHidden}>
	<EventForm submitFunction={t} action="?/updateEvent" buttonLabel="Save" />
</Drawer>
<section>
	<div class="max-w-8xl mx-auto px-4 pt-4 lg:px-40">
		<Breadcrumb pathToLabel={labelMap} />
	</div>
</section>
<section>
	<div class="max-w-8xl mx-auto px-4 py-4 align-middle lg:px-20">
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
			{#each events as event}
				<EventCard
					eventName={event.eventName}
					eventPhoto={event.photo}
					eventAddress={event.address}
					eventStartTime={event.startTime}
					eventEndTime={event.endTime}
					eventDescription={event.description}
					eventTag={event.eventTag}
				/>
			{/each}
		</div>
	</div>
</section>
<AddEventButton />

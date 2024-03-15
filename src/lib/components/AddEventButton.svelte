<script lang="ts">
	import { Button, Modal } from 'flowbite-svelte';
	import { CirclePlusSolid } from 'flowbite-svelte-icons';
	import type { SubmitFunction } from '@sveltejs/kit';
	import toast from 'svelte-french-toast';
	import EventForm from './EventForm.svelte';

	const submitCreateEvent: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Event added!');
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

	let addEventFormModal = false;
</script>

<div class="fixed bottom-0 right-0 m-6">
	<Button class="p-2" on:click={() => (addEventFormModal = true)}
		><CirclePlusSolid class="h-10 w-10" /></Button
	>
</div>
<Modal bind:open={addEventFormModal} bodyClass="overflow-y-visible">
	<EventForm submitFunction={submitCreateEvent} action="?/addEvent" buttonLabel="Add" />
</Modal>

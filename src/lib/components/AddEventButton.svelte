<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button, Modal, Input, Label, Textarea } from 'flowbite-svelte';
	import { CirclePlusSolid } from 'flowbite-svelte-icons';
	import Select from '$lib/components/Select.svelte';
	import { EventTag } from '../../common/Types.js';
	import type { SubmitFunction } from '@sveltejs/kit';
	import toast from 'svelte-french-toast';
	import SveltyPicker from 'svelty-picker';
	import EventForm from './EventForm.svelte';

	const eventTagOptions = (Object.keys(EventTag) as Array<keyof typeof EventTag>).map((key) => {
		return { label: EventTag[key], value: EventTag[key] };
	});

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
<Modal bind:open={addEventFormModal} bodyClass="overflow-y-visible"
	><form method="POST" action="?/addEvent" use:enhance={submitCreateEvent}>
		<Label for="event-name">Event</Label>
		<Input type="text" name="eventName" placeholder="Event Name" required id="event-name" />
		<Label for="event-description">Description</Label>
		<Textarea
			id="event-description"
			name="description"
			rows="4"
			placeholder="Enter a description..."
		/>
		<Label for="event-address">Address</Label>
		<Input type="text" name="address" required id="event-address" placeholder="Address" />
		<Label for="event-time-range">Time Range</Label>
		<SveltyPicker
			name="dateRange"
			isRange
			placeholder="Select date range"
			displayFormat="yyyy/mm/dd"
			todayBtn={true}
			clearBtn={true}
			inputClasses="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
		<Label for="event-image">Event Image</Label>
		<Input type="url" name="photo" required id="event-image" placeholder="Image URL" />
		<Label for="event-tag">Event Tag</Label>
		<Select options={eventTagOptions} name="eventTag" />
		<Button type="submit" color="green" class="mt-2">Add</Button>
	</form>
</Modal>

<style>
	:global(.dark) {
		--sdt-bg-main: #585858;
		--sdt-shadow-color: #777;
		--sdt-color: #eee;
		--sdt-clock-color: var(--sdt-color);
		--sdt-clock-color-hover: var(--sdt-color);
		--sdt-clock-time-bg: transparent;
		--sdt-clock-time-bg-hover: transparent;
		--sdt-clock-disabled: #b22222;
		--sdt-clock-disabled-bg: var(--sdt-bg-main);
		--sdt-clock-selected-bg: var(--sdt-bg-selected);
		--sdt-header-color: #eee;
		--sdt-bg-selected: #e1ac4a;
		--sdt-table-disabled-date: #b22222;
		--sdt-table-disabled-date-bg: var(--sdt-bg-main);
		--sdt-table-data-bg-hover: #777;
		--sdt-table-selected-bg: var(--sdt-bg-selected);
		--sdt-header-btn-bg-hover: #777;
		--sdt-color-selected: #fff;
		--sdt-table-today-indicator: #ccc;
		--sdt-clock-bg: #999;
		/* custom buttons */
		--sdt-today-bg: #e4a124;
		--sdt-today-color: #fff;
		--sdt-clear-color: #666;
		--sdt-clear-bg: #ddd;
		--sdt-clear-hover-color: #fff;
		--sdt-clear-hover-bg: #dc3545;
	}
	:global(.light) {
		--sdt-bg-main: #fff;
		--sdt-shadow-color: #ccc;
		--sdt-color: inherit;
		--sdt-clock-color: var(--sdt-color);
		--sdt-clock-color-hover: var(--sdt-color);
		--sdt-clock-time-bg: transparent;
		--sdt-clock-time-bg-hover: transparent;
		--sdt-clock-disabled: #b22222;
		--sdt-clock-disabled-bg: var(--sdt-bg-main);
		--sdt-clock-selected-bg: var(--sdt-bg-selected);
		--sdt-bg-selected: #286090;
		--sdt-table-disabled-date: #b22222;
		--sdt-table-disabled-date-bg: var(--sdt-bg-main);
		--sdt-table-data-bg-hover: #eee;
		--sdt-table-selected-bg: var(--sdt-bg-selected);
		--sdt-header-btn-bg-hover: #dfdfdf;
		--sdt-color-selected: #fff;
		--sdt-table-today-indicator: #ccc;
		--sdt-clock-bg: #eeeded;
		/* custom buttons */
		--sdt-today-bg: #1e486d;
		--sdt-today-color: #fff;
		--sdt-clear-color: #dc3545;
		--sdt-clear-bg: #fff;
		--sdt-clear-hover-color: #fff;
		--sdt-clear-hover-bg: #dc3545;
	}
</style>

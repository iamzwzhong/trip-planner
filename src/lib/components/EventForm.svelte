<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button, Helper, Input, Label, Textarea } from 'flowbite-svelte';
	import Select from '$lib/components/Select.svelte';
	import SveltyPicker from 'svelty-picker';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { EventTag } from '$lib/types/Event';

	export let formErrors;
	const resetFormErrors = (error) => {
		if (formErrors) formErrors[error] = null;
	};

	const eventTagOptions = (Object.keys(EventTag) as Array<keyof typeof EventTag>).map((key) => {
		return { label: EventTag[key], value: EventTag[key] };
	});

	export let submitFunction: SubmitFunction;
	export let action: string;
	export let buttonLabel: string;
</script>

<form method="POST" {action} use:enhance={submitFunction} autocomplete="off">
	<Label for="event-name">Event</Label>
	<Input
		type="text"
		name="eventName"
		placeholder="Event Name"
		id="event-name"
		on:input={() => {
			resetFormErrors('eventName');
		}}
	/>
	{#if formErrors?.eventName}
		<Helper color="red"><span class="font-medium">{formErrors?.eventName[0]}</span></Helper>
	{/if}
	<Label for="event-description">Description</Label>
	<Textarea
		id="event-description"
		name="description"
		rows="4"
		placeholder="Enter a description..."
		on:input={() => {
			resetFormErrors('description');
		}}
	/>
	{#if formErrors?.description}
		<Helper color="red"><span class="font-medium">{formErrors?.description[0]}</span></Helper>
	{/if}
	<Label for="event-address">Address</Label>
	<Input
		type="text"
		name="address"
		id="event-address"
		placeholder="Address"
		on:input={() => {
			resetFormErrors('address');
		}}
	/>
	{#if formErrors?.address}
		<Helper color="red"><span class="font-medium">{formErrors?.address[0]}</span></Helper>
	{/if}
	<Label for="event-time-range">Time Range</Label>
	<SveltyPicker
		name="dateRange"
		isRange
		placeholder="Select date range"
		displayFormat="yyyy/mm/dd"
		todayBtn={false}
		clearBtn={false}
		inputClasses="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
		on:input={() => {
			resetFormErrors('dateRange');
		}}
	/>
	{#if formErrors?.dateRange}
		<Helper color="red"><span class="font-medium">{formErrors?.dateRange[0]}</span></Helper>
	{/if}
	<Label for="event-image">Event Image</Label>
	<Input
		type="url"
		name="photo"
		id="event-image"
		placeholder="Image URL"
		on:input={() => {
			resetFormErrors('photo');
		}}
	/>
	{#if formErrors?.photo}
		<Helper color="red"><span class="font-medium">{formErrors?.photo[0]}</span></Helper>
	{/if}
	<Label for="event-tag">Event Tag</Label>
	<Select options={eventTagOptions} name="eventTag" />
	{#if formErrors?.eventTag}
		<Helper color="red"><span class="font-medium">{formErrors?.eventTag[0]}</span></Helper>
	{/if}
	<Button type="submit" color="green" class="mt-2">{buttonLabel}</Button>
</form>

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

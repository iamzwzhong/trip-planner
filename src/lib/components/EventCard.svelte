<script lang="ts">
	import { Heading, Img, P } from 'flowbite-svelte';
	import { EventTag } from '../../common/Types';
	import { toDisplayDate } from '$lib/utils/Utils';

	export let eventName: string;
	export let eventPhoto: string;
	export let eventAddress: string;
	export let eventDescription: string;
	export let eventStartTime: Date;
	export let eventEndTime: Date;
	export let eventTag: EventTag;

	const eventTagColors = new Map([
		[EventTag.Anime, 'bg-orange-300'],
		[EventTag.Nature, 'bg-green-400'],
		[EventTag.Attractions, 'bg-blue-500'],
		[EventTag.ReligiousArchitecture, 'bg-purple-400'],
		[EventTag.Food, 'bg-yellow-200'],
		[EventTag.Shopping, 'bg-red-400']
	]);
</script>

<div
	class="flex max-w-sm flex-col border-4 border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0)] shadow-gray-400 dark:border-gray-500 dark:shadow-gray-700"
>
	<Img class="h-64 w-96 object-cover" src={eventPhoto} alt={eventName} />
	<div class="grow p-5">
		<Heading tag="h4">
			{eventName}
		</Heading>
		<P italic>{eventAddress}</P>
		<P>{toDisplayDate(eventStartTime) + ' - ' + toDisplayDate(eventEndTime)}</P>
		<hr class="mb-2" />
		<P>{eventDescription}</P>
	</div>
	<Heading
		tag="h3"
		class="t w-full {eventTagColors.get(eventTag)} px-2 py-1 text-xl font-bold text-white"
		>{eventTag}</Heading
	>
</div>

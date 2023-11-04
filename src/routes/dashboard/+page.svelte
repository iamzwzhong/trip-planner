<script lang="ts">
	import {
		Avatar,
		Carousel,
		Heading,
		Select,
		Thumbnails,
		Timeline,
		TimelineItem
	} from 'flowbite-svelte';
	import example_dashboard_img from '$lib/images/example-dashboard.png';
	import { faker } from '@faker-js/faker';
	import { daysBetween } from '../../utils/DateHelpers';
	import type { Trip } from '../../common/Types';
	import type { HTMLImgAttributes } from 'svelte/elements';
	export let data: {
		events: import('../../common/Types').Event[];
		users: import('../../common/Types').User[];
	};
	const myEventsData = data.events.slice(0, 3);
	const otherEventsData = data.events.slice(3, 5);
	const japanTripStartDate = faker.date.future();
	const japanTripEndDate = faker.date.soon({ refDate: japanTripStartDate });
	const japanTrip: Trip = {
		id: faker.string.uuid(),
		tripName: 'Japan',
		startDate: japanTripStartDate,
		endDate: japanTripEndDate,
		photo: `https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2020/06/osaka-dotonbori-iStock-1138049211-1024x683.jpg`
	};
	const taiwanTripStartDate = faker.date.future();
	const taiwanTripEndDate = faker.date.soon({ refDate: taiwanTripStartDate });
	const taiwanTrip: Trip = {
		id: faker.string.uuid(),
		tripName: 'Taiwan',
		startDate: taiwanTripStartDate,
		endDate: taiwanTripEndDate,
		photo: `https://www.thoughtco.com/thmb/YDGscjZfOaQw5181nHXnkjRCVAI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/aerial-view-of-cityscape-at-taipei-center-district--taiwan-861177234-5b7f14a446e0fb005087f1e3.jpg`
	};
	const today = new Date();
	const trips = [
		{ value: japanTrip, name: 'Japan' },
		{ value: taiwanTrip, name: 'Taiwan' }
	];
	const images: HTMLImgAttributes[] = otherEventsData.map((x) => ({
		src: x.photo,
		alt: x.description
	}));
	let selected: Trip;
	let index = 0;
</script>

<main>
	<section>
		<div
			class="w-full m-auto p-5 flex flex-col gap-5 text-center lg:flex-row lg:flex-wrap items-center lg:justify-around xl:justify-evenly xl:max-w-screen-3xl"
		>
			<div
				class="flex flex-col items-center w-full gap-2 lg:w-7/12 lg:flex-row lg:justify-center lg:items-start"
			>
				<Avatar src={data.users[0].avatar} class="h-300 w-300 max-w-sm lg:h-52 lg:w-52" />
				<Heading tag="h2" class="w-max text-center tracking-tighter"
					>{data.users[0].username}</Heading
				>
			</div>
			<div
				class="flex flex-col items-center gap-3 sm:max-w-3xl lg:order-2 lg:max-w-4xl 2xl:max-w-xl 2xl:items-start"
			>
				<Heading tag="h3" class="w-max tracking-tight">My Trip Dashboard</Heading>
				<p class="text-lg text-gray-500 dark:text-gray-400 text-justify">
					Welcome to your personal dashboard page. Here, you'll be able to access a summary view of
					your trip. View everything that you would need to know about your trip at a quick glance
					here.
				</p>
				<p class="text-lg text-gray-500 dark:text-gray-400 text-justify">
					Get started by selecting a trip in the top-right section of the dashboard. You must join a
					trip before you will be able to see any in the dropdown.
				</p>
				<ul
					class="list-none list-inside space-y-4 text-left self-stretch font-medium text-gray-900 dark:text-white border-y dark:border-gray-700 py-8 lg:order-2"
				>
					<li class="flex items-center gap-2">
						<svg
							class="w-5 h-5 p-1 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-700"
							width="14"
							height="10"
							viewBox="0 0 14 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M4.99992 8.29289L4.64637 7.93934L1.35697 4.64995C1.26295 4.56044 1.13776 4.51096 1.00786 4.51209C0.876764 4.51323 0.751358 4.56582 0.658654 4.65852C0.56595 4.75122 0.513365 4.87663 0.512226 5.00773C0.511097 5.13763 0.560568 5.26282 0.650079 5.35684L4.64642 9.35318C4.64644 9.3532 4.64645 9.35322 4.64647 9.35323C4.74023 9.44693 4.86736 9.49957 4.99992 9.49957C5.13248 9.49957 5.25961 9.44693 5.35337 9.35323L4.99992 8.29289ZM4.99992 8.29289L5.35347 7.93934L12.6464 0.646393C12.6464 0.646376 12.6465 0.646358 12.6465 0.64634C12.7402 0.552638 12.8674 0.5 12.9999 0.5C13.1325 0.5 13.2597 0.552658 13.3534 0.646393C13.4471 0.740146 13.4997 0.867253 13.4997 0.999786C13.4997 1.13234 13.4471 1.25947 13.3534 1.35323C13.3533 1.35325 13.3533 1.35327 13.3533 1.35329L5.35342 9.35318L4.99992 8.29289Z"
								stroke="currentColor"
							/></svg
						>
						View upcoming events that you follow
					</li>
					<li class="flex items-center gap-2">
						<svg
							class="w-5 h-5 p-1 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-700"
							width="14"
							height="10"
							viewBox="0 0 14 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M4.99992 8.29289L4.64637 7.93934L1.35697 4.64995C1.26295 4.56044 1.13776 4.51096 1.00786 4.51209C0.876764 4.51323 0.751358 4.56582 0.658654 4.65852C0.56595 4.75122 0.513365 4.87663 0.512226 5.00773C0.511097 5.13763 0.560568 5.26282 0.650079 5.35684L4.64642 9.35318C4.64644 9.3532 4.64645 9.35322 4.64647 9.35323C4.74023 9.44693 4.86736 9.49957 4.99992 9.49957C5.13248 9.49957 5.25961 9.44693 5.35337 9.35323L4.99992 8.29289ZM4.99992 8.29289L5.35347 7.93934L12.6464 0.646393C12.6464 0.646376 12.6465 0.646358 12.6465 0.64634C12.7402 0.552638 12.8674 0.5 12.9999 0.5C13.1325 0.5 13.2597 0.552658 13.3534 0.646393C13.4471 0.740146 13.4997 0.867253 13.4997 0.999786C13.4997 1.13234 13.4471 1.25947 13.3534 1.35323C13.3533 1.35325 13.3533 1.35327 13.3533 1.35329L5.35342 9.35318L4.99992 8.29289Z"
								stroke="currentColor"
							/></svg
						>
						View other events during your trip that you may be interested in
					</li>
					<li class="flex items-center gap-2">
						<svg
							class="w-5 h-5 p-1 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-700"
							width="14"
							height="10"
							viewBox="0 0 14 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M4.99992 8.29289L4.64637 7.93934L1.35697 4.64995C1.26295 4.56044 1.13776 4.51096 1.00786 4.51209C0.876764 4.51323 0.751358 4.56582 0.658654 4.65852C0.56595 4.75122 0.513365 4.87663 0.512226 5.00773C0.511097 5.13763 0.560568 5.26282 0.650079 5.35684L4.64642 9.35318C4.64644 9.3532 4.64645 9.35322 4.64647 9.35323C4.74023 9.44693 4.86736 9.49957 4.99992 9.49957C5.13248 9.49957 5.25961 9.44693 5.35337 9.35323L4.99992 8.29289ZM4.99992 8.29289L5.35347 7.93934L12.6464 0.646393C12.6464 0.646376 12.6465 0.646358 12.6465 0.64634C12.7402 0.552638 12.8674 0.5 12.9999 0.5C13.1325 0.5 13.2597 0.552658 13.3534 0.646393C13.4471 0.740146 13.4997 0.867253 13.4997 0.999786C13.4997 1.13234 13.4471 1.25947 13.3534 1.35323C13.3533 1.35325 13.3533 1.35327 13.3533 1.35329L5.35342 9.35318L4.99992 8.29289Z"
								stroke="currentColor"
							/></svg
						>
						View your profiles of the friends you are traveling with
					</li>
				</ul>
			</div>
			<img
				src={selected ? selected.photo : example_dashboard_img}
				alt={selected ? selected.tripName : 'Example Dashboard Image'}
				class="rounded-md bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 w-full sm:w-auto sm:h-96 lg:order-2 dashboard-image"
			/>
			<div class="flex flex-col max-w-xs mx-auto gap-6 lg:order-1">
				{#if selected}
					<Heading tag="h3" class="tracking-tighter"
						>{daysBetween(today, selected.startDate)} days until this trip</Heading
					>
				{:else}
					<Heading tag="h3" class="tracking-tighter">Select a Trip</Heading>
				{/if}
				<Select class="mt-2" items={trips} bind:value={selected} />
			</div>
		</div>
	</section>
	{#if selected}
		<section>
			<div
				class="w-full m-auto flex flex-col p-5 gap-5 text-center items-center justify-center lg:flex-row xl:max-w-screen-xl 2xl:items-start"
			>
				<div class="lg:w-1/2 items-center flex-col flex">
					<Heading tag="h2" class="pb-6">Upcoming Events</Heading>
					<Timeline order="vertical">
						{#each myEventsData as event}
							<TimelineItem>
								<svelte:fragment slot="icon">
									<span
										class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-800 dark:bg-gray-700"
									/>
								</svelte:fragment>
								<div
									class="flex flex-col items-center gap-2 max-w-xl lg:flex-row lg:items-start lg:gap-4 2xl:max-w-7xl"
								>
									<div class="flex flex-col items-center lg:items-start">
										<img
											src={event.photo}
											alt={event.eventName + ' photo'}
											class="rounded-3xl object-cover h-60 w-full mb-2 lg:mb-6 lg:h-80 upcoming-events-image"
										/>
										<Heading
											tag="h3"
											class="rounded-full text-xl font-bold text-white bg-red-500 py-1 px-2 w-fit"
											>{event.eventTag}</Heading
										>
									</div>
									<div class="lg:max-w-xs lg:text-left">
										<h4 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
											{event.eventName}
										</h4>
										<h6 class="font-bold text-gray-900 dark:text-white">
											{new Date(event.startTime).toDateString()}
										</h6>
										<h6 class="font-bold text-gray-900 dark:text-white">
											{new Date(event.startTime).toLocaleTimeString() +
												' - ' +
												new Date(event.endTime).toLocaleTimeString()}
										</h6>
										<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight max-w-sm">
											{event.description}
										</p>
									</div>
								</div>
							</TimelineItem>
						{/each}
					</Timeline>
				</div>
				<div class="lg:w-1/2 self-stretch justify-around flex-col flex">
					<div class="flex flex-col gap-5 text-center items-center">
						<Heading tag="h2" class="pb-6">Travel Friends</Heading>
						<div
							class="flex flex-col overflow-y-scroll travel-friends-scrollbar max-h-72"
							dir="rtl"
						>
							{#each data.users as { avatar, username }}
								<div class="flex mr-auto gap-5 mb-3 ml-5">
									<h4
										class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-auto"
									>
										{username}
									</h4>
									<img
										src={avatar}
										alt={username + ' avatar'}
										class="rounded-full bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 w-8 h-8 sm:w-12 sm:h-12"
									/>
								</div>
							{/each}
						</div>
					</div>
					<div
						class="w-full max-w-sm m-auto p-5 flex flex-col gap-5 text-center items-center sm:max-w-lg"
					>
						<Heading tag="h2">Other Events</Heading>
						<div class="max-w-xl space-y-4">
							<Carousel {images} let:Indicators let:Controls bind:index transition={null}>
								<Indicators />
								<Controls />
							</Carousel>
							<Thumbnails
								class="bg-transparent gap-3"
								let:Thumbnail
								let:image
								let:selected
								{images}
								bind:index
							>
								<Thumbnail
									{...image}
									{selected}
									class="rounded-md shadow-xl hover:outline hover:outline-primary-500 h-20"
									activeClass="outline outline-primary-400"
								/>
							</Thumbnails>
							<div class="flex flex-col items-center text-center">
								<Heading
									tag="h3"
									class="rounded-full text-xl font-bold text-white bg-red-500 py-1 px-2"
									style="width: fit-content">{data.events[0].eventTag}</Heading
								>
								<Heading tag="h4" class="tracking-tight">
									{data.events[0].eventName}
								</Heading>
								<Heading tag="h6">
									{new Date(data.events[0].startTime).toDateString()}
								</Heading>
								<Heading tag="h6">
									{new Date(data.events[0].startTime).toLocaleTimeString() +
										' - ' +
										new Date(data.events[0].endTime).toLocaleTimeString()}
								</Heading>
							</div>
							<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
								{images[index].alt}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	{/if}
</main>

<style>
	.travel-friends-scrollbar::-webkit-scrollbar {
		width: 20px;
		height: 20px;
	}

	.travel-friends-scrollbar::-webkit-scrollbar-track {
		border-radius: 100vh;
		background: #f7f4ed;
	}

	.travel-friends-scrollbar::-webkit-scrollbar-thumb {
		background: #e0cbcb;
		border-radius: 100vh;
		border: 3px solid #f6f7ed;
	}

	.travel-friends-scrollbar::-webkit-scrollbar-thumb:hover {
		background: #c0a0b9;
	}

	@media (min-width: 1024px) {
		.dashboard-image {
			height: 479px;
			width: 896px;
		}
	}

	@media (min-width: 1536px) {
		.upcoming-events-image {
			width: 650px;
			height: 250px;
		}
	}
</style>

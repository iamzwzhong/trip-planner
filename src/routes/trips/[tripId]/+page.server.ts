import { error, fail, type Actions } from '@sveltejs/kit';
import { checkImageExists } from '$lib/utils/Utils.js';
import type { Trip } from '$lib/types/Trip.js';
import type { Event, EventTag } from '$lib/types/Event.js';

export async function load({ fetch, params }) {
	const fetchTrip = async () => {
		const tripRes = await fetch(`/api/trips/${params.tripId}`);
		if (!tripRes.ok) {
			throw error(500, `Failed to retrieve trip: ${params.tripId}`);
		}
		const rawJsonTrip: Trip[] = await tripRes.json();
		const trip = rawJsonTrip.map(createTrip)[0];
		return trip;
	};
	const fetchEvents = async () => {
		const eventsRes = await fetch(`/api/trips/${params.tripId}/events`);
		if (!eventsRes.ok) {
			throw error(500, `Failed to retrieves events for trip: ${params.tripId}`);
		}
		const rawJsonEvents: Event[] = await eventsRes.json();
		const events = rawJsonEvents.map(createEvent);
		return events;
	};

	return { events: await fetchEvents(), trip: await fetchTrip() };
}

function createEvent(data): Event {
	return {
		id: data.id,
		tripId: data.tripId,
		eventName: data.eventName,
		address: data.address,
		description: data.description,
		photo: data.photo,
		startTime: new Date(data.startTime),
		endTime: new Date(data.endTime),
		eventTag: data.eventTag as EventTag
	};
}

function createTrip(data): Trip {
	return {
		id: data.id,
		tripName: data.tripName,
		startDate: new Date(data.startDate),
		endDate: new Date(data.endDate),
		photo: data.photo
	};
}

export const actions = {
	addEvent: async ({ request, fetch, params }) => {
		const data = Object.fromEntries(await request.formData());

		if (data.eventName.toString().length < 1) {
			return fail(400, {
				data: data,
				errorMsg: 'Event name cannot be empty.'
			});
		} else if ((await checkImageExists(data.photo.toString(), fetch)) == false) {
			return fail(400, {
				data: data,
				errorMsg: 'Event image is invalid.'
			});
		} else if (data.description.toString().length < 1) {
			return fail(400, {
				data: data,
				errorMsg: 'Event description cannot be empty.'
			});
		} else if (data.description.toString().length > 500) {
			return fail(400, {
				data: data,
				errorMsg: 'Event description cannot exceed 500 characters.'
			});
		} else if (data.address.toString().length < 1) {
			return fail(400, {
				data: data,
				errorMsg: 'Event address cannot be empty.'
			});
		} else if (data.eventTag.toString().length < 1) {
			return fail(400, {
				data: data,
				errorMsg: 'Event tag cannot be empty.'
			});
		} else if (data.dateRange.toString() == '') {
			return fail(400, {
				data: data,
				errorMsg: 'Event date range is not selected.'
			});
		}
		const dateRange = data.dateRange.toString().split(',');
		const startDate = dateRange[0];
		const endDate = dateRange[1];

		const eventObject = {
			name: data.eventName,
			startTime: startDate,
			endTime: endDate,
			description: data.description,
			address: data.address,
			photo: data.photo,
			eventTag: data.eventTag as EventTag
		};

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(eventObject)
		};
		return fetch(`/api/trips/${params.tripId}/events`, options).then((response) => {
			if (!response.ok) {
				return fail(500, {
					errorMsg: 'Internal Server Error'
				});
			}
		});
	}
} satisfies Actions;

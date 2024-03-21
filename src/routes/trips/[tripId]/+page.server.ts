import { error, fail, type Actions } from '@sveltejs/kit';
import { validateData } from '$lib/utils/Utils.js';
import type { Trip } from '$lib/types/Trip.js';
import { EventFormSchema, type Event, type EventTag } from '$lib/types/Event.js';

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
		const { formData, errors } = await validateData(await request.formData(), EventFormSchema);

		if (errors) {
			return fail(400, { data: formData, errors: errors.fieldErrors, errorMsg: 'Invalid Form' });
		}

		const eventObject = {
			name: formData.eventName,
			startTime: new Date(formData.dateRange.toString().split(',')[0]),
			endTime: new Date(formData.dateRange.toString().split(',')[1]),
			description: formData.description,
			address: formData.address,
			photo: formData.photo,
			eventTag: formData.eventTag as EventTag
		};

		return fetch(`/api/trips/${params.tripId}/events`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(eventObject)
		}).then((response) => {
			if (!response.ok) {
				return fail(500, {
					errorMsg: 'Internal Server Error'
				});
			}
		});
	}
} satisfies Actions;

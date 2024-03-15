import { error, type Actions, fail } from '@sveltejs/kit';
import type { Trip } from '../../common/Types.js';
import { checkImageExists } from '$lib/utils/Utils.js';

export async function load({ fetch }) {
	const fetchTrips = async () => {
		const tripsRes = await fetch('/api/trips');
		if (!tripsRes.ok) {
			throw error(500, 'Failed to retrieve trips');
		}
		const rawJsonTrips: Trip[] = await tripsRes.json();
		const trips = rawJsonTrips.map(createTrip);
		return trips;
	};

	return { trips: await fetchTrips() };
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
	addTrip: async ({ request, fetch }) => {
		const data = Object.fromEntries(await request.formData());

		if (data.tripName.length < 1) {
			return fail(400, {
				data: data,
				errorMsg: 'Trip name cannot be empty.'
			});
		} else if ((await checkImageExists(data.photo.toString(), fetch)) == false) {
			return fail(400, {
				data: data,
				errorMsg: 'Trip image is invalid.'
			});
		}

		const tripObject = {
			tripName: data.tripName,
			startDate: data.start,
			endDate: data.end,
			photo: data.photo
		};

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(tripObject)
		};
		fetch('/api/trips', options);
	}
} satisfies Actions;

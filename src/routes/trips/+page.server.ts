import { error, type Actions, fail } from '@sveltejs/kit';
import { TripFormSchema, type Trip } from '$lib/types/Trip.js';
import { validateData } from '$lib/utils/Utils.js';

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
		const { formData, errors } = await validateData(await request.formData(), TripFormSchema);

		if (errors) {
			return fail(400, { data: formData, errors: errors.fieldErrors });
		}

		const tripObject = {
			tripName: formData.tripName,
			startDate: new Date(formData.dateRange.toString().split(',')[0]),
			endDate: new Date(formData.dateRange.toString().split(',')[1]),
			photo: formData.photo
		};

		return fetch('/api/trips', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(tripObject)
		}).then((response) => {
			if (!response.ok) {
				return fail(500, {
					errorMsg: 'Internal Server Error'
				});
			}
		});
	}
} satisfies Actions;

import { db } from '@vercel/postgres';
import type { Trip } from '../../../../common/Types';
import { json } from '@sveltejs/kit';

// api/trips/[id]

export async function GET({ params }) {
	const rows = await db.sql`SELECT * FROM TRIPS WHERE id = ${params.id}`;
	const trips: Trip[] = rows.rows.map((row) => {
		return {
			id: row.id,
			tripName: row.trip_name,
			startDate: new Date(Date.parse(row.start_date)),
			endDate: new Date(Date.parse(row.end_date)),
			photo: row.photo
		} as Trip;
	});
	return json(trips, { status: 200 });
}

export async function PUT({ params, request }) {
	const { tripName, startDate, endDate, photo } = await request.json();
	await db.sql`UPDATE TRIPS SET trip_name = ${tripName}, start_date = ${new Date(
		startDate
	).toISOString()}, end_date = ${new Date(endDate).toISOString()}, photo = ${photo} WHERE id = ${
		params.id
	}`;
	return new Response(null, { status: 204 });
}

export async function DELETE({ params }) {
	await db.sql`DELETE FROM TRIPS WHERE id = ${params.id}`;
	return new Response(null, { status: 200 });
}

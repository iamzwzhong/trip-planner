import { faker } from '@faker-js/faker';
import { db } from '@vercel/postgres';
import type { Trip } from '../../../common/Types';
import { json } from '@sveltejs/kit';

// api/trips

export async function GET() {
	const rows = await db.sql`SELECT * FROM TRIPS`;
	const trips: Trip[] = rows.rows.map((row) => {
		const parsedStartDate: Date = new Date(row.start_date);
		const parsedEndDate: Date = new Date(row.end_date);
		return {
			id: row.id,
			tripName: row.trip_name,
			startDate: parsedStartDate,
			endDate: parsedEndDate,
			photo: row.photo
		} as Trip;
	});
	return json(trips, { status: 200 });
}

export async function POST({ request }) {
	const { tripName, startDate, endDate, photo } = await request.json();
	await db.sql`INSERT INTO TRIPS (trip_name, start_date, end_date, photo) 
		VALUES (${tripName}, ${new Date(startDate).toISOString()}, ${new Date(
		endDate
	).toISOString()}, ${photo});`;
	return new Response(null, { status: 201 });
}

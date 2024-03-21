import { db } from '@vercel/postgres';
import { json } from '@sveltejs/kit';
import type { Event, EventTag } from '$lib/types/Event.js';

// api/trips/[id]/events

export async function GET({ params }) {
	const rows = await db.sql`SELECT * FROM EVENTS WHERE trip_id = ${params.id}`;
	const events: Event[] = rows.rows.map((row) => {
		return {
			id: row.id,
			tripId: row.trip_id,
			eventName: row.event_name,
			address: row.address,
			description: row.description,
			photo: row.photo,
			startTime: new Date(row.start_time),
			endTime: new Date(row.end_time),
			eventTag: row.event_tag as EventTag
		} as Event;
	});
	return json(events, { status: 200 });
}

export async function POST({ params, request }) {
	const { name, startTime, endTime, description, address, photo, eventTag } = await request.json();
	await db.sql`INSERT INTO events (trip_id, event_name, address, description, photo, start_time, end_time, event_tag) 
		VALUES (${params.id}, ${name}, ${address}, ${description}, ${photo}, ${new Date(
		startTime
	).toISOString()}, ${new Date(endTime).toISOString()}, ${eventTag});`;
	return new Response(null, { status: 201 });
}

export async function DELETE({ params }) {
	await db.sql`DELETE FROM EVENTS WHERE trip_id = ${params.id}`;
	return new Response(null, { status: 200 });
}

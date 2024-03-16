import { db } from '@vercel/postgres';
import type { Event, EventTag } from '../../../../../../common/Types.js';
import { json } from '@sveltejs/kit';

// api/trips/[id]/events/[eventId]

export async function GET({ params }) {
	const rows =
		await db.sql`SELECT * FROM EVENTS WHERE trip_id = ${params.id} and id = ${params.eventId}`;
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

export async function DELETE({ params }) {
	await db.sql`DELETE FROM EVENTS WHERE trip_id = ${params.id} and id = ${params.eventId}`;
	return new Response(null, { status: 200 });
}

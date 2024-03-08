import { db } from '@vercel/postgres';
import { EventTag, type Event } from '../../../../../common/Types';
import { json } from '@sveltejs/kit';
import { faker } from '@faker-js/faker';

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
	const { eventName } = await request.json();
	const eventStartTime = faker.date.soon();
	const eventEndTime = new Date(eventStartTime);
	eventEndTime.setHours(eventStartTime.getHours() + 2);
	const address = faker.location.streetAddress();
	const description = faker.lorem.paragraph();
	const photo = `https://api.dicebear.com/7.x/icons/svg?seed=${faker.number.int()}`;
	const startTime = eventStartTime;
	const endTime = eventEndTime;
	const eventTag = faker.helpers.enumValue(EventTag);
	await db.sql`INSERT INTO events (trip_id, event_name, address, description, photo, start_time, end_time, event_tag) 
		VALUES (${
			params.id
		}, ${eventName}, ${address}, ${description}, ${photo}, ${startTime.toISOString()}, ${endTime.toISOString()}, ${eventTag});`;
	return new Response(null, { status: 201 });
}

export async function DELETE({ params }) {
	await db.sql`DELETE FROM EVENTS WHERE trip_id = ${params.id}`;
	return new Response(null, { status: 200 });
}

import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const eventsRes = await fetch('/api/events');
	const usersRes = await fetch('/api/users');

	if (eventsRes.ok && usersRes.ok)
		return { events: await eventsRes.json(), users: await usersRes.json() };
	throw error(500);
}

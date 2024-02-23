import { json, type RequestEvent } from '@sveltejs/kit';
import type { User } from '../../../common/Types';
import { db } from '@vercel/postgres';

export async function GET() {
	const rows = await db.sql`SELECT * FROM users`;
	return json(rows.rows as User[], { status: 200 });
}

export async function POST(requestEvent: RequestEvent) {
	const { request } = requestEvent;
	const { username } = await request.json();
	const avatar = 'https://api.dicebear.com/7.x/thumbs/svg?seed=' + username;
	await db.sql`INSERT INTO users (username, avatar) VALUES (${username}, ${avatar});`;
	return new Response(null, { status: 201 });
}

export async function DELETE(requestEvent: RequestEvent) {
	const { request } = requestEvent;
	const { username } = await request.json();
	await db.sql`DELETE FROM users WHERE username = ${username}`;
	return new Response(null, { status: 200 });
}

import { faker } from '@faker-js/faker';
import { json } from '@sveltejs/kit';
import type { User } from '../../../common/Types';

function createRandomUser(): User {
	const username = faker.internet.userName();
	return {
		id: faker.string.uuid(),
		avatar: `https://api.dicebear.com/7.x/thumbs/svg?seed=${username}`,
		username: username
	};
}

const generateUsers = () =>
	[...Array(10)].map(() => {
		return createRandomUser();
	});

export function GET() {
	return json(generateUsers());
}

import { faker } from '@faker-js/faker';
import { json } from '@sveltejs/kit';

const generateCovers = () =>
	[...Array(50)].map(() => {
		const lastName = faker.person.lastName();
		return { avatar: `https://api.dicebear.com/7.x/thumbs/svg?seed=${lastName}`, lastName };
	});

export function GET() {
	return json(generateCovers());
}

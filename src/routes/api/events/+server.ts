import { faker } from '@faker-js/faker';
import { json } from '@sveltejs/kit';
import { EventTag, type Event } from '../../../common/Types';

function createRandomEvent(): Event {
	return {
		id: faker.string.uuid(),
		eventName: faker.location.city(),
		address: faker.location.streetAddress(),
		description: faker.lorem.paragraph(),
		photo: `https://api.dicebear.com/7.x/icons/svg?seed=${faker.number.int()}`,
		startTime: faker.date.recent(),
		endTime: faker.date.soon(),
		eventTag: faker.helpers.enumValue(EventTag)
	};
}

const generateEvents = () =>
	[...Array(5)].map(() => {
		return createRandomEvent();
	});

export function GET() {
	return json(generateEvents());
}

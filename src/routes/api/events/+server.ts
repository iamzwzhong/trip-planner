import { faker } from '@faker-js/faker';
import { json } from '@sveltejs/kit';
import { EventTag, type Event } from '../../../common/Types';

function createRandomEvent(): Event {
	const eventStartTime = faker.date.soon();
	const eventEndTime = new Date(eventStartTime);
	eventEndTime.setHours(eventStartTime.getHours() + 2);
	return {
		id: faker.string.uuid(),
		eventName: faker.location.city(),
		address: faker.location.streetAddress(),
		description: faker.lorem.paragraph(),
		photo: `https://api.dicebear.com/7.x/icons/svg?seed=${faker.number.int()}`,
		startTime: eventStartTime,
		endTime: eventEndTime,
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

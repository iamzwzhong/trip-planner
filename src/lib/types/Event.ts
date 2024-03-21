import { checkImageExists } from '$lib/utils/Utils';
import { z } from 'zod';

export interface Event {
	id: string;
	tripId: string;
	eventName: string;
	address: string;
	description: string;
	photo: string;
	startTime: Date;
	endTime: Date;
	eventTag: EventTag;
}

export enum EventTag {
	Anime = 'Anime',
	Nature = 'Nature',
	Attractions = 'Attractions',
	ReligiousArchitecture = 'Religious Architecture',
	Food = 'Food',
	Shopping = 'Shopping'
}

export const EventFormSchema = z.object({
	eventName: z
		.string()
		.min(1, { message: 'Name cannot be empty' })
		.max(50, { message: 'Name cannot exceed 50 characters' })
		.trim(),
	address: z
		.string()
		.min(1, { message: 'Address cannot be empty' })
		.max(255, { message: 'Address cannot exceed 255 characters' })
		.trim(),
	description: z
		.string()
		.min(1, { message: 'Description cannot be empty' })
		.max(500, { message: 'Description cannot exceed 500 characters' })
		.trim(),
	dateRange: z.string().regex(new RegExp('\\d{4}-\\d{2}-\\d{2},\\d{4}-\\d{2}-\\d{2}'), {
		message: 'Date range is invalid'
	}),
	photo: z
		.string()
		.url({ message: 'Invalid url' })
		.min(1, { message: 'Url cannot be empty' })
		.max(500, { message: 'Url cannot exceed 500 characters. Please use a URL shortener' })
		.refine(
			async (photoUrl) => {
				try {
					const check = await checkImageExists(photoUrl);
					return check;
				} catch (err) {
					return false;
				}
			},
			{ message: 'This url is not a valid photo' }
		),
	eventTag: z.nativeEnum(EventTag)
});

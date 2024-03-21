import { checkImageExists } from '$lib/utils/Utils';
import { z } from 'zod';

export interface Trip {
	id: string;
	tripName: string;
	startDate: Date;
	endDate: Date;
	photo: string;
}

export const TripFormSchema = z.object({
	tripName: z
		.string()
		.min(1, { message: 'Name cannot be empty' })
		.max(50, { message: 'Name cannot exceed 50 characters' })
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
				return await checkImageExists(photoUrl);
			},
			{ message: 'This url is not a valid photo' }
		)
});

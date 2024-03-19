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

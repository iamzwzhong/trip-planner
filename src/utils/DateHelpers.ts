export function daysBetween(date1: Date, date2: Date): number {
	const timeDiff = Math.abs(date1?.getTime() - date2?.getTime());
	return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

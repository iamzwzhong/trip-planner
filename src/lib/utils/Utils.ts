const abbrMonthNames = new Intl.DateTimeFormat('en-US', { month: 'short' }).format;

export function daysBetween(date1: Date, date2: Date): number {
	const timeDiff = Math.abs(date1?.getTime() - date2?.getTime());
	return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

export function capitalize(s: string): string {
	return s[0].toUpperCase() + s.slice(1);
}

export function toResponse(message, statusCode: number): Response {
	return new Response(JSON.stringify({ message: message }), { status: statusCode });
}

export function toDisplayDate(date: Date): string {
	const month = abbrMonthNames(date);
	return `${month} ${date.getDate()} ${date.getFullYear()}`;
}

export async function checkImageExists(url: string, fetch) {
	const res = await fetch(url, { method: 'HEAD' });
	const buff = await res.blob();
	return buff.type.startsWith('image/');
}

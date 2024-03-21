const abbrMonthNames = new Intl.DateTimeFormat('en-US', { month: 'short' }).format;

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

export async function checkImageExists(url: string) {
	const res = await fetch(url, { method: 'HEAD' });
	const buff = await res.blob();
	return buff.type.startsWith('image/');
}

export const validateData = async (formData, schema) => {
	const body = Object.fromEntries(formData);
	const { success, error, data } = await schema.safeParseAsync(body);
	if (success) {
		return {
			formData: data,
			errors: null
		};
	} else {
		return {
			formData: body,
			errors: error.flatten()
		};
	}
};

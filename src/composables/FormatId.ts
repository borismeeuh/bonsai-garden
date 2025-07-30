export function formatId(id: string) {
	let formattedId = id.charAt(0).toUpperCase() + id.slice(1);
	formattedId = formattedId.replace(/-/g, " ");

	return formattedId;
}

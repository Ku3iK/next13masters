export const getInitials = (name?: string): string => {
	if (!name) return "NN";

	const parts = name.split(" ");
	const firstName = parts[0] || "";
	const lastName = parts[1] || "";

	if (parts.length === 1) {
		return firstName.slice(0, 2).toUpperCase();
	}

	return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};

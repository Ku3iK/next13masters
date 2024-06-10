import { useState, useEffect } from "react";

export const useDebouncedSearch = (searchTerm: string, delay: number): string => {
	const [debouncedTerm, setDebouncedTerm] = useState<string>(searchTerm);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedTerm(searchTerm);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [searchTerm, delay]);

	return debouncedTerm;
};

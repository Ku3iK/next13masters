import { useEffect } from "react";

export const useKeyboardShortcut = (callback: (e: KeyboardEvent) => void) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			callback(e);
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [callback]);
};

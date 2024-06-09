import { type UrlObject } from "url";
import { URL_PATTERN_REGEX } from "@/constants/URL";

export const toUrlObject = (url: string): UrlObject => {
	if (!url) {
		throw new Error("URL cannot be empty");
	}

	if (!URL_PATTERN_REGEX.test(url)) {
		throw new Error("Invalid URL");
	}

	return {
		pathname: url,
	};
};

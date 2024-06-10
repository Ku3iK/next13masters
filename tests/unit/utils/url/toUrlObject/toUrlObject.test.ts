import { type UrlObject } from "url";
import { toUrlObject } from "@/utils/url/toUrlObject";
import { routes } from "@/routes/routes"; // Import obiektu routes

describe("toUrlObject", () => {
	it("should convert a simple string URL to a UrlObject with pathname", () => {
		const urlString: string = "/cart";
		const urlObject: UrlObject = toUrlObject(urlString);

		expect(urlObject).toEqual({ pathname: "/cart" });
	});

	it("should handle query parameters correctly", () => {
		const urlString: string = "/path?name=test";
		const urlObject: UrlObject = toUrlObject(urlString);

		expect(urlObject).toEqual({ pathname: "/path?name=test" });
	});

	it("should handle full URLs correctly", () => {
		const urlString: string = "https://example.com/path?name=test";
		const urlObject: UrlObject = toUrlObject(urlString);

		expect(urlObject).toEqual({ pathname: "https://example.com/path?name=test" });
	});

	it("should throw an error for invalid URLs", () => {
		const invalidUrl: string = "ht@tp://inv@lid.url";

		expect(() => toUrlObject(invalidUrl)).toThrow("Invalid URL");
	});

	it("should throw an error for empty strings", () => {
		const emptyString: string = "";

		expect(() => toUrlObject(emptyString)).toThrow("URL cannot be empty");
	});

	it("should handle URLs with hash fragments correctly", () => {
		const urlString: string = "/path#section";
		const urlObject: UrlObject = toUrlObject(urlString);

		expect(urlObject).toEqual({ pathname: "/path#section" });
	});

	it("should handle search route with query parameter", () => {
		const urlObject: UrlObject = routes.search.url({ query: "test" });

		expect(urlObject).toEqual({ pathname: "/search?query=test" });
	});

	it("should handle search route without query parameter", () => {
		const urlObject: UrlObject = routes.search.url();

		expect(urlObject).toEqual({ pathname: "/search?query=" });
	});
});

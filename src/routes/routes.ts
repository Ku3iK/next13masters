import { type Routes } from "@/routes/types";
import { toUrlObject } from "@/utils/url/toUrlObject";

export const routes: Routes = {
	homepage: {
		name: "homepage",
		url: () => toUrlObject("/"),
	},
	cart: {
		name: "cart",
		url: () => toUrlObject("/cart"),
	},
	search: {
		name: "search",
		url: (params) => {
			const { query } = params || {};
			return toUrlObject(`/search?query=${query || ""}`);
		},
	},
};

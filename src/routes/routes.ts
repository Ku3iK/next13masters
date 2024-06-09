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
};

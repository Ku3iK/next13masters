import { type Route } from "next";
import { type Routes } from "@/routes/types";

export const routes: Routes = {
	cart: {
		name: "cart",
		url: () => "/cart",
	},
	categories: {
		name: "categories",
		url: (params) => `/categories/${params?.category || ""}` as Route,
	},
	homepage: {
		name: "homepage",
		url: () => "/",
	},
	products: {
		name: "products",
		url: () => "/products",
	},
	search: {
		name: "search",
		url: (params) => `/search?query=${params?.query || ""}`,
	},
};

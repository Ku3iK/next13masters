import { type Route } from "next";

type RouteParams = { [key: string]: string | number | undefined };

type RouteDefinition<T extends RouteParams> = {
	name: string;
	url: (params?: T) => Route;
};

export type Routes = {
	homepage: RouteDefinition<{}>;
	cart: RouteDefinition<{}>;
	search: RouteDefinition<{ query: string }>;
	products: RouteDefinition<{}>;
	categories: RouteDefinition<{ category: string }>;
};

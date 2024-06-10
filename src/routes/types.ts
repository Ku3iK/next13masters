import { type UrlObject } from "url";

type RouteParams = {
	query?: string;
};

type RouteImpl = {
	name: string;
	url: (params?: RouteParams) => UrlObject;
};

type RouteKeys = "homepage" | "cart" | "search";

export type Routes = {
	[K in RouteKeys]: RouteImpl;
};

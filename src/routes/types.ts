import { type UrlObject } from "url";

type RouteImpl = {
	name: string;
	url: () => UrlObject;
};

type RouteKeys = "homepage" | "cart";

export type Routes = {
	[K in RouteKeys]: RouteImpl;
};

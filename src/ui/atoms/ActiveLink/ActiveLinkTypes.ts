import { type Route } from "next";
import { type ReactNode } from "react";

export type ActiveLinkType<T extends string = string> = {
	href: Route<T> | URL;
	children: ReactNode;
};

import { type Route } from "next";
import { type ReactNode } from "react";

export type HrefType<T extends string> = Route<T> | URL;

export type ActiveLinkType = {
	href: HrefType<string>;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
	children: ReactNode;
};

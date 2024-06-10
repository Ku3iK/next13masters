"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { type ActiveLinkType } from "./ActiveLinkTypes";
import { Button } from "@/components/ui/button";

export const ActiveLink = ({ href, exact, children, ...props }: ActiveLinkType) => {
	const pathname = usePathname();
	const matchedPath = (typeof href === "string" ? href : href.pathname) ?? null;
	const isActive =
		(matchedPath &&
			pathname &&
			(exact ? pathname === matchedPath : pathname.startsWith(matchedPath))) ||
		false;

	return (
		<Button asChild variant={isActive ? "default" : "link"} size={"sm"}>
			<NextLink
				{...props}
				href={href}
				aria-current={isActive ? "page" : undefined}
				className={"hover:bg-accent hover:no-underline"}
			>
				{children}
			</NextLink>
		</Button>
	);
};

"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ActiveLinkType } from "./ActiveLinkTypes";

export const ActiveLink = ({
	href,
	className,
	activeClassName,
	exact,
	children,
}: ActiveLinkType) => {
	const pathname = usePathname();
	const matchedPath = (typeof href === "string" ? href : href.pathname) ?? null;
	const isActive =
		(matchedPath &&
			pathname &&
			(exact ? pathname === matchedPath : pathname.startsWith(matchedPath))) ||
		false;

	return (
		<Link
			href={href}
			className={clsx(
				`text-blue-400 transition-colors duration-300 ease-in-out hover:text-blue-600 ${
					isActive && activeClassName
				} ${className && className}`,
				{
					underline: isActive,
				},
			)}
		>
			{children}
		</Link>
	);
};

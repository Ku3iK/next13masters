"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ActiveLinkType } from "./ActiveLinkTypes";

export const ActiveLink = ({ href, children }: ActiveLinkType) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(
				"text-blue-400 transition-colors duration-300 ease-in-out hover:text-blue-600",
				{
					underline: isActive,
				},
			)}
		>
			{children}
		</Link>
	);
};

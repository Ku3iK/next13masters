import { type ReactNode } from "react";
import { type HrefType } from "../ActiveLink/ActiveLinkTypes";
import { ActiveLink } from "../ActiveLink/ActiveLink";

export const PaginationButton = ({
	children,
	url,
	disabled = false,
}: {
	children: ReactNode;
	url: HrefType<string>;
	disabled: boolean;
}) => {
	const styles = "flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 px-4";

	if (disabled) {
		return (
			<button disabled className={`${styles} cursor-not-allowed opacity-60`}>
				{children}
			</button>
		);
	}

	return (
		<ActiveLink
			href={url}
			className={`${styles} transition-colors duration-300 ease-in-out hover:bg-slate-400 hover:text-white`}
		>
			{children}
		</ActiveLink>
	);
};

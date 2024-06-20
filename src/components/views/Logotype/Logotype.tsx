import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes";

export const Logotype = () => {
	return (
		<Button asChild variant={"link"} className={"px-2"}>
			<NextLink
				href={routes.homepage.url()}
				className="whitespace-nowrap text-xl font-bold hover:bg-accent hover:no-underline md:text-2xl"
			>
				VibeWear
			</NextLink>
		</Button>
	);
};

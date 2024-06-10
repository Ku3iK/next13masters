import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes/routes";

export const Logotype = () => {
	return (
		<Button asChild variant={"link"}>
			<NextLink
				href={routes.homepage.url()}
				className="whitespace-nowrap text-lg font-bold hover:bg-accent hover:no-underline sm:text-xl md:text-2xl"
			>
				VibeWear
			</NextLink>
		</Button>
	);
};

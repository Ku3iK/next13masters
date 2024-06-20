import NextLink from "next/link";
import { ShoppingCart } from "lucide-react";
import { routes } from "@/routes";
import { ShoppingCartQuantitySuspense } from "@/components/containers/ShoppingCartQuantity";
import { Button } from "@/components/ui/button";

export const ShoppingCartButton = () => {
	return (
		<Button asChild variant={"link"} size={"sm"} className={"p-0 no-underline hover:no-underline"}>
			<NextLink href={routes.cart.url()} className="group flex items-center gap-2">
				<ShoppingCart width={20} height={20} className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
				<ShoppingCartQuantitySuspense />
				<span className="sr-only">Items in cart, view bag</span>
			</NextLink>
		</Button>
	);
};

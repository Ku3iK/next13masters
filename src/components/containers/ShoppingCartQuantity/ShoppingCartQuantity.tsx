import { Suspense } from "react";
import { getCartFromCookies } from "@/api/cart/cart";
import {
	ShoppingCartQuantity as ShoppingCartQuantityView,
	ShoppingCartQuantitySkeleton,
} from "@/components/views/ShoppingCartQuantity";

export const ShoppingCartQuantity = async () => {
	const cart = await getCartFromCookies();

	const quantity = cart?.orderItems.length ?? 0;

	return <ShoppingCartQuantityView quantity={quantity} />;
};

export const ShoppingCartQuantitySuspense = () => {
	return (
		<Suspense fallback={<ShoppingCartQuantitySkeleton />}>
			<ShoppingCartQuantity />
		</Suspense>
	);
};

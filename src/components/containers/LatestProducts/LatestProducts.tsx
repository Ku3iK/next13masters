import { Suspense } from "react";
import { productsGetSuggestedByNewest } from "@/api/products/products";
import { LatestProducts as LatestProductsView } from "@/components/views/LatestProducts";
import { LatestProductsSkeleton } from "@/components/views/LatestProducts/LatestProductsSkeleton";

export const LatestProducts = async () => {
	const products = await productsGetSuggestedByNewest();

	return <LatestProductsView products={products} />;
};

export const LatestProductsSuspense = () => {
	return (
		<Suspense fallback={<LatestProductsSkeleton />}>
			<LatestProducts />
		</Suspense>
	);
};

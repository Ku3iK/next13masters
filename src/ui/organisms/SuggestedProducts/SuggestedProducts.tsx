import { ProductList } from "../ProductList/ProductList";
import { productsGetSuggestedByNewest } from "@/api/products/products";

export const SuggestedProducts = async ({ isListView }: { isListView: boolean }) => {
	const products = await productsGetSuggestedByNewest();

	return (
		<div data-testid="related-products" className="sticky top-4">
			<h2 className="mb-4 text-2xl font-bold">Nasze najnowsze produkty</h2>
			<ProductList products={products} isListView={isListView} />
		</div>
	);
};

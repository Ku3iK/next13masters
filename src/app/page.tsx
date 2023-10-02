import { productsGetList } from "@/api/products/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { collectionsGetList } from "@/api/collections/collections";
import { CollectionsList } from "@/ui/organisms/CollectionsList/CollectionsList";

export default async function HomePage() {
	const products = await productsGetList();
	const collections = await collectionsGetList();

	return (
		<>
			<h1>Home Page</h1>
			<ProductList products={products} />
			<div className="mt-12">
				<CollectionsList collections={collections} />
			</div>
		</>
	);
}

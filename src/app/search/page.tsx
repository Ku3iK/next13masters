import { productsGetList } from "@/api/products/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { productsGetByName } from "@/services/api/products/productsGetByName";

export default async function SearchPage({ searchParams }: { searchParams: { query: string } }) {
	const name = searchParams.query;

	const products = name
		? await productsGetByName({
				name,
			})
		: await productsGetList();

	return (
		<>
			<h1 className="mb-4">Search results</h1>
			{!products.length ? <p>No results</p> : <ProductList products={products} />}
		</>
	);
}

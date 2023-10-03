import { productsGetByName, productsGetList } from "@/api/products/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export default async function SearchPage({ searchParams }: { searchParams: { query: string } }) {
	const searchedValue = searchParams.query;

	const products = searchedValue ? await productsGetByName(searchedValue) : await productsGetList();

	return (
		<>
			<h1 className="mb-4">Search results</h1>
			<ProductList products={products} />

			{!products.length ? <p>No results</p> : <ProductList products={products} />}
		</>
	);
}

import { productsGetList } from "@/api/products/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export default async function HomePage() {
	const products = await productsGetList();

	return (
		<>
			<h1>Home Page</h1>
			<ProductList products={products} />
		</>
	);
}

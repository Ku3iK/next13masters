import { getProductsList } from "@/api/products/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export default async function ProductsPage() {
	const products = await getProductsList();

	return <ProductList products={products} />;
}

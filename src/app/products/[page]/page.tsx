import { getProductsByNumber } from "@/api/products/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export default async function ProductsPaginationPage({ params }: { params: { page: string } }) {
	const pageNumber = parseInt(params.page, 10);
	const products = await getProductsByNumber(20, pageNumber);

	return (
		<div>
			<h1>Produkty strona {pageNumber}</h1>
			<ProductList products={products} />
		</div>
	);
}

import { getProductsByNumber } from "@/api/products/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export async function generateStaticParams() {
	return [
		{ page: "1" },
		{ page: "2" },
		{ page: "3" },
		{ page: "4" },
		{ page: "5" },
		{ page: "6" },
		{ page: "7" },
		{ page: "8" },
		{ page: "9" },
		{ page: "10" },
	];
}

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

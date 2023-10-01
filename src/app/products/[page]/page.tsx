import { redirect } from "next/navigation";
import { productsGetListByPage } from "@/api/products/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export async function generateStaticParams() {
	return [{ page: "1" }, { page: "2" }];
}

export default async function ProductsPaginationPage({ params }: { params: { page: string } }) {
	const products = await productsGetListByPage(10, params.page);

	if (!products.length) {
		redirect("/products");
	}

	return (
		<div>
			<h1>Products page {params.page}</h1>
			<ProductList products={products} />
		</div>
	);
}

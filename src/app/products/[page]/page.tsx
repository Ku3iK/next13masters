import { redirect } from "next/navigation";
import { productsGetListByPage } from "@/api/products/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { ProductsSorting } from "@/ui/molecules/ProductsSorting/ProductsSorting";
import { type ProductOrderByInput } from "@/gql/graphql";
import { addAverageRatingToProducts } from "@/utils/addAverageRatingToProducts";

export async function generateStaticParams() {
	return [{ page: "1" }, { page: "2" }];
}

export default async function ProductsPaginationPage({
	params,
	searchParams,
}: {
	params: { page: string };
	searchParams: { sortBy: ProductOrderByInput };
}) {
	const products = await productsGetListByPage(10, params.page, searchParams?.sortBy || undefined);

	const productsWithRating = addAverageRatingToProducts(products);

	if (!products.length) {
		redirect("/products");
	}

	return (
		<div>
			<h1>Products page {params.page}</h1>
			<ProductsSorting />
			<ProductList products={productsWithRating} />
		</div>
	);
}

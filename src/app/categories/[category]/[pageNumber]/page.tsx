import { notFound } from "next/navigation";
import { productsGetByCategorySlugPerPage } from "@/api/products/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	if (params.category === "t-shirts") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }];
	}
};

export default async function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await productsGetByCategorySlugPerPage(params.category, 2, params.pageNumber);

	if (!products) throw notFound();

	return (
		<>
			<h1 className={"first-letter:uppercase"}>
				{params.category} page {params.pageNumber}
			</h1>
			<ProductList products={products} />
		</>
	);
}

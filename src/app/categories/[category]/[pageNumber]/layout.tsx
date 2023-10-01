import { type ReactNode } from "react";
import { ProductsPagination } from "@/ui/organisms/ProductsPagination/ProductsPagination";
import { categoryGetTotalProductsNumber } from "@/api/categories/categories";

export default async function CategoriesPaginationPageLayout({
	params,
	children,
}: {
	params: { category: string; pageNumber: string };
	children: ReactNode;
}) {
	const numberOfProducts = await categoryGetTotalProductsNumber();

	return (
		<div>
			<div>{children}</div>

			<ProductsPagination
				currentPage={parseInt(params.pageNumber, 10)}
				perPage={2}
				numberOfProducts={numberOfProducts}
				customUrl={`/categories/${params.category}`}
			/>
		</div>
	);
}

import { type ReactNode } from "react";
import { ProductsPagination } from "@/ui/organisms/ProductsPagination/ProductsPagination";
import { productsGetTotalNumber } from "@/api/products/products";

export default async function ProductsPaginationPageLayout({
	params,
	children,
}: {
	params: { page: string };
	children: ReactNode;
}) {
	const numberOfProducts = await productsGetTotalNumber();

	return (
		<div>
			<div>{children}</div>

			<ProductsPagination
				currentPage={parseInt(params.page, 10)}
				numberOfProducts={numberOfProducts}
			/>
		</div>
	);
}

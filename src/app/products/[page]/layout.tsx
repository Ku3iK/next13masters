import { type ReactNode } from "react";
import { ProductsPagination } from "@/ui/organisms/ProductsPagination/ProductsPagination";

export default async function ProductsPaginationPageLayout({
	params,
	children,
}: {
	params: { page: string };
	children: ReactNode;
}) {
	return (
		<div>
			<div>{children}</div>

			<ProductsPagination currentPage={parseInt(params.page, 10)} numberOfProducts={211} />
		</div>
	);
}

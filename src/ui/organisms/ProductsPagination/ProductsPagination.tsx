import { getMaxPages } from "@/utils/getMaxPagesNumber";
import { PaginationButton } from "@/ui/atoms/PaginationButton/PaginationButton";

export const ProductsPagination = ({
	currentPage = 1,
	perPage = 20,
	numberOfProducts,
}: {
	currentPage: number;
	perPage?: number;
	numberOfProducts: number;
}) => {
	const lastPage = getMaxPages(numberOfProducts, perPage);

	return (
		<div className="mx-auto mt-8 flex items-center justify-center gap-4">
			<PaginationButton url={"/products/1"} disabled={currentPage <= 1}>
				{"<<"}
			</PaginationButton>
			<PaginationButton url={`/products/${currentPage - 1}`} disabled={currentPage <= 1}>
				{"<"}
			</PaginationButton>
			<p>{currentPage}</p>
			<PaginationButton url={`/products/${currentPage + 1}`} disabled={currentPage >= lastPage}>
				{">"}
			</PaginationButton>
			<PaginationButton url={`/products/${lastPage}`} disabled={currentPage >= lastPage}>
				{">>"}
			</PaginationButton>
		</div>
	);
};

import { getMaxPages } from "@/utils/getMaxPagesNumber";
import { PaginationButton } from "@/ui/atoms/PaginationButton/PaginationButton";
import { type HrefType } from "@/ui/atoms/ActiveLink/ActiveLinkTypes";

export const ProductsPagination = ({
	currentPage = 1,
	perPage = 10,
	numberOfProducts,
	customUrl,
}: {
	currentPage: number;
	perPage?: number;
	numberOfProducts: number;
	customUrl?: string;
}) => {
	const lastPage = getMaxPages(numberOfProducts, perPage);

	return (
		<div aria-label="pagination" className="mx-auto mt-8 flex items-center justify-center gap-4">
			<PaginationButton
				url={`${customUrl ? `${customUrl}/1` : `/products/1`}` as HrefType<string>}
				disabled={currentPage <= 1}
			>
				{"<<"}
			</PaginationButton>
			<PaginationButton
				url={
					`${
						customUrl ? `${customUrl}/${currentPage - 1}` : `/products/${currentPage - 1}`
					}` as HrefType<string>
				}
				disabled={currentPage <= 1}
			>
				{"<"}
			</PaginationButton>
			<p>{currentPage}</p>
			<PaginationButton
				url={
					`${
						customUrl ? `${customUrl}/${currentPage + 1}` : `/products/${currentPage + 1}`
					}` as HrefType<string>
				}
				disabled={currentPage >= lastPage}
			>
				{">"}
			</PaginationButton>
			<PaginationButton
				url={
					`${customUrl ? `${customUrl}/${lastPage}` : `/products/${lastPage}`}` as HrefType<string>
				}
				disabled={currentPage >= lastPage}
			>
				{">>"}
			</PaginationButton>
		</div>
	);
};

"use client";

import { useSearchParams } from "next/navigation";
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
	const sortBy = useSearchParams().get("sortBy");
	const lastPage = getMaxPages(numberOfProducts, perPage);

	const buildUrl = (page: number) => {
		const base = customUrl ? `${customUrl}/${page}` : `${page}`;
		return (sortBy ? `${base}?sortBy=${sortBy}` : base) as HrefType<string>;
	};

	return (
		<div aria-label="pagination" className="mx-auto mt-8 flex items-center justify-center gap-4">
			<PaginationButton url={buildUrl(1)} disabled={currentPage <= 1}>
				{"<<"}
			</PaginationButton>
			<PaginationButton url={buildUrl(currentPage - 1)} disabled={currentPage <= 1}>
				{"<"}
			</PaginationButton>
			<p>{currentPage}</p>
			<PaginationButton url={buildUrl(currentPage + 1)} disabled={currentPage >= lastPage}>
				{">"}
			</PaginationButton>
			<PaginationButton url={buildUrl(lastPage)} disabled={currentPage >= lastPage}>
				{">>"}
			</PaginationButton>
		</div>
	);
};

import Link from "next/link";
import { getMaxPages } from "@/utils/getMaxPagesNumber";

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
			{currentPage == 1 ? (
				<button disabled className="cursor-not-allowed opacity-60">
					{"<<"}
				</button>
			) : (
				<Link href={"/products/1"}>{"<<"}</Link>
			)}
			{currentPage > 1 ? (
				<Link href={`/products/${currentPage - 1}`}>{"<"}</Link>
			) : (
				<button disabled className="cursor-not-allowed opacity-60">
					{"<"}
				</button>
			)}
			<p>{currentPage}</p>
			{currentPage < lastPage ? (
				<Link href={`/products/${currentPage + 1}`}>{">"}</Link>
			) : (
				<button disabled className="cursor-not-allowed opacity-60">
					{">"}
				</button>
			)}
			{currentPage == lastPage ? (
				<button disabled className="cursor-not-allowed opacity-60">
					{">>"}
				</button>
			) : (
				<Link href={`/products/${lastPage}`}>{">>"}</Link>
			)}
		</div>
	);
};

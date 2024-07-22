import { useQuery } from "@tanstack/react-query";
import { reviewsGetByProductId } from "@/services/api/reviews/reviewsByProductId";
import { type GenericUseQueryOptions } from "@/services/types";
import { type ReviewsByProductIdQuery } from "@/gql/graphql";
import { type ReviewsByProductIdParams } from "@/services/api/reviews/reviewsByProductId/types";

export const REVIEWS_BY_PRODUCT = "reviews_by_product";

export const getReviewsByProductQueryKey = (params: ReviewsByProductIdParams) => [
	REVIEWS_BY_PRODUCT,
	params,
];

export const useReviewsByProductQuery = (
	params: ReviewsByProductIdParams,
	options?: GenericUseQueryOptions<ReviewsByProductIdQuery["reviews"]>,
) => {
	return useQuery({
		queryKey: getReviewsByProductQueryKey(params),
		queryFn: () => reviewsGetByProductId(params),
		...options,
	});
};

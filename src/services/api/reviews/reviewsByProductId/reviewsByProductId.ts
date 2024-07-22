import { type ReviewsByProductIdParams } from "@/services/api/reviews/reviewsByProductId/types";
import { executeGraphql } from "@/api/grapghqlApiInstance";
import {
	ReviewsByProductIdDocument,
	type ReviewsByProductIdQuery,
	type ReviewsByProductIdQueryVariables,
} from "@/gql/graphql";

export const reviewsGetByProductId = async ({ productId }: ReviewsByProductIdParams) => {
	const variables: ReviewsByProductIdQueryVariables = { productId };

	const response = await executeGraphql<ReviewsByProductIdQuery, ReviewsByProductIdQueryVariables>({
		query: ReviewsByProductIdDocument,
		variables,
	});

	return response.reviews;
};

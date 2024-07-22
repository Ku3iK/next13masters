import { executeGraphql } from "@/api/grapghqlApiInstance";
import { ProductAddReviewDocument } from "@/gql/graphql";
import {
	type AddReviewToProductByClientSideResponse,
	type AddReviewToProductParams,
} from "@/services/api/reviews/addReviewToProduct/types";
import { publishProductReviewById } from "@/api/products/products";
import { type ApiResponse } from "@/services/types";

export const addReviewToProduct = async (params: AddReviewToProductParams) => {
	const response = await executeGraphql({
		query: ProductAddReviewDocument,
		variables: { ...params },
		headers: {
			Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
		},
	});

	return response.createReview?.id;
};

export const addReviewToProductByClientSide = async (
	params: AddReviewToProductParams,
): Promise<AddReviewToProductByClientSideResponse> => {
	const response = await fetch("/api/addReview", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(params),
	});

	const { data, error } =
		(await response.json()) as ApiResponse<AddReviewToProductByClientSideResponse>;

	if (!response.ok) {
		throw new Error(error || "An unknown error occurred");
	}

	if (!data?.reviewId) {
		throw new Error("No reviewId returned");
	}

	await publishProductReviewById(data.reviewId);

	return { reviewId: data.reviewId };
};

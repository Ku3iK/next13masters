import { useMutation } from "@tanstack/react-query";
import {
	type AddReviewToProductParams,
	type AddReviewToProductResponse,
} from "@/services/api/reviews/addReviewToProduct/types";
import { addReviewToProductByClientSide } from "@/services/api/reviews/addReviewToProduct";
import { type GenericUseMutationOptions } from "@/services/types";

export const useAddReviewMutation = (
	options?: GenericUseMutationOptions<AddReviewToProductResponse, AddReviewToProductParams>,
) => {
	return useMutation<AddReviewToProductResponse, Error, AddReviewToProductParams, unknown>({
		mutationFn: (params: AddReviewToProductParams) => addReviewToProductByClientSide(params),
		...options,
	});
};

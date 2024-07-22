"use client";

import { type ProductReviewsProps } from "@/components/containers/ProductReviews/types";
import { Reviews } from "@/components/views/Reviews";
import { ReviewsSkeleton } from "@/components/views/Reviews/ReviewsSkeletons";
import { useReviewsByProductQuery } from "@/services/queries/hooks/reviews/useProductReviews";
import { ReviewsError } from "@/components/views/Reviews/ReviewsError";

export const ProductReviews = ({ productId }: ProductReviewsProps) => {
	const { data: reviews, isLoading, error } = useReviewsByProductQuery({ productId });

	if (isLoading) return <ReviewsSkeleton />;

	if (error) return <ReviewsError />;

	return <Reviews reviews={reviews} />;
};

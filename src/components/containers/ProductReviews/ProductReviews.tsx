"use client";

import { type ProductReviewsProps } from "@/components/containers/ProductReviews/types";
import { Reviews } from "@/components/views/Reviews";
import { ReviewsSkeleton } from "@/components/views/Reviews/ReviewsSkeletons";
import { ReviewsNotFound } from "@/components/views/Reviews/ReviewsNotFound";
import { useReviewsByProductQuery } from "@/services/queries/hooks/reviews/useProductReviews";

export const ProductReviews = ({ productId }: ProductReviewsProps) => {
	const { data: reviews, isLoading, error } = useReviewsByProductQuery({ productId });

	if (isLoading) return <ReviewsSkeleton />;
	if (error) return <ReviewsNotFound />;

	return <Reviews reviews={reviews} />;
};

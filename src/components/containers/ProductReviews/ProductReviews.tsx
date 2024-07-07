import { Suspense } from "react";
import { type ProductReviewsProps } from "@/components/containers/ProductReviews/types";
import { reviewsGetByProductId } from "@/services/api/reviews/reviewsByProductId";
import { Reviews } from "@/components/views/Reviews";
import { ReviewsSkeleton } from "@/components/views/Reviews/ReviewsSkeletons";

export const ProductReviews = async ({ productId }: ProductReviewsProps) => {
	const reviews = await reviewsGetByProductId({ productId });

	return <Reviews reviews={reviews} />;
};

export const ProductReviewsSuspense = (props: ProductReviewsProps) => {
	return (
		<Suspense fallback={<ReviewsSkeleton />}>
			<ProductReviews {...props} />
		</Suspense>
	);
};

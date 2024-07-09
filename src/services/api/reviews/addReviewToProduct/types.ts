export type AddReviewToProductParams = {
	headline: string;
	name: string;
	email: string;
	content: string;
	rating: number;
	productId: string;
};

export type AddReviewToProductResponse = {
	reviewId: string | undefined;
};

export type AddReviewToProductByClientSideResponse = {
	reviewId: string;
};

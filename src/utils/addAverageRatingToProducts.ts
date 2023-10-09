import { type ProductListItemFragment } from "@/gql/graphql";

export type ProductWithAverageRating = ProductListItemFragment & {
	averageRating?: number;
};

export const addAverageRatingToProducts = (
	products: ProductListItemFragment[],
): ProductWithAverageRating[] => {
	return products.map((product) => {
		const totalRating = product.reviews.reduce((acc, review) => acc + review.rating, 0);
		const averageRating = product.reviews.length ? totalRating / product.reviews.length : 0;

		return {
			...product,
			averageRating,
		};
	});
};

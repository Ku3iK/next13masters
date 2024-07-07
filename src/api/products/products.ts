"use server";

import { executeGraphql } from "../grapghqlApiInstance";
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductsGetSuggestedByNewestDocument,
	ProductsGetListWithPagesDocument,
	ProductsGetTotalNumberDocument,
	ProductsGetByCategorySlugPerPageDocument,
	ProductsGetByCollectionSlugDocument,
	ProductReviewPublishByIdDocument,
	type ProductOrderByInput,
	ProductsGetListWithRatesDocument,
} from "@/gql/graphql";

export const productsGetList = async () => {
	const response = await executeGraphql({
		query: ProductsGetListDocument,
	});

	return response.products;
};

export const productsGetByCategorySlug = async (categorySlug: string) => {
	const response = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: {
			slug: categorySlug,
		},
	});

	return response.categories[0]?.products;
};

export const productGetById = async (productId: string) => {
	const response = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: productId },
	});

	return response.product;
};

export const productsGetSuggestedByNewest = async () => {
	const response = await executeGraphql({ query: ProductsGetSuggestedByNewestDocument });

	return response.products;
};

export const productsGetTotalNumber = async () => {
	const response = await executeGraphql({ query: ProductsGetTotalNumberDocument });

	return response.productsConnection.aggregate.count;
};

export const productsGetListByPage = async (
	perPage: number = 10,
	currentPageNumber: string,
	orderBy: ProductOrderByInput = "publishedAt_ASC",
) => {
	const skip = (Number(currentPageNumber) - 1) * 10;

	const response = await executeGraphql({
		query: ProductsGetListWithPagesDocument,
		variables: {
			first: perPage,
			skip: skip,
			orderBy: orderBy,
		},
	});

	return response.products;
};

export const productsGetByCategorySlugPerPage = async (
	categorySlug: string,
	perPage: number = 10,
	currentPageNumber: string,
) => {
	const skip = (Number(currentPageNumber) - 1) * 2;

	const response = await executeGraphql({
		query: ProductsGetByCategorySlugPerPageDocument,
		variables: {
			categorySlug: categorySlug,
			first: perPage,
			skip: skip,
		},
	});

	return response.categories[0]?.products;
};

export const productsGetByCollectionSlug = async (collectionSlug: string) => {
	const response = await executeGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: {
			slug: collectionSlug,
		},
	});

	return {
		collectionName: response.collections[0]?.name,
		products: response.collections[0]?.products,
	};
};

export const publishProductReviewById = async (reviewId: string) => {
	const response = await executeGraphql({
		query: ProductReviewPublishByIdDocument,
		variables: { reviewId },
		headers: {
			Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
		},
	});

	return response.publishReview?.id;
};

export const productsGetListWithRates = async () => {
	const response = await executeGraphql({
		query: ProductsGetListWithRatesDocument,
	});

	return response.products;
};

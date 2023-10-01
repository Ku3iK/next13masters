import { executeGraphql } from "../grapghqlApiInstance";
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductsGetSuggestedByNewestDocument,
	ProductsGetListWithPagesDocument,
	ProductsGetTotalNumberDocument,
} from "@/gql/graphql";

export const productsGetList = async () => {
	const response = await executeGraphql(ProductsGetListDocument, {});

	return response.products;
};

export const productsGetByCategorySlug = async (categorySlug: string) => {
	const response = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: categorySlug,
	});

	return response.categories[0]?.products;
};

export const productGetById = async (productId: string) => {
	const response = await executeGraphql(ProductGetByIdDocument, { id: productId });

	return response.product;
};

export const productsGetSuggestedByNewest = async () => {
	const response = await executeGraphql(ProductsGetSuggestedByNewestDocument, {});

	return response.products;
};

export const productsGetTotalNumber = async () => {
	const response = await executeGraphql(ProductsGetTotalNumberDocument, {});

	return response.productsConnection.aggregate.count;
};

export const productsGetListByPage = async (perPage: number = 10, currentPageNumber: string) => {
	const skip = (Number(currentPageNumber) - 1) * 10;

	const response = await executeGraphql(ProductsGetListWithPagesDocument, {
		first: perPage,
		skip: skip,
	});

	return response.products;
};

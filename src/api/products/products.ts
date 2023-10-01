import { executeGraphql } from "../grapghqlApiInstance";
import {
	ProductGetByIdDocument,
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductsGetSuggestedByNewestDocument,
} from "@/gql/graphql";

const productsEndPointInstance = `${process.env.API_BASE_URL}/products`;

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

// TODO: Use GraphQL instead of REST
export const getProductsByNumber = async (number: number, page?: number) => {
	let baseUrl = `${productsEndPointInstance}?take=${number}`;

	if (page !== undefined) {
		const offset = number * (page - 1);
		baseUrl = `${productsEndPointInstance}?offset=${offset}&take=${number}`;
	}

	const res = await fetch(baseUrl);

	const productsResponse = (await res.json()) as ProductListItemFragment[];

	const products = productsResponse.map(productListItemTypeToProductListItemType);

	return products;
};

const productListItemTypeToProductListItemType = (
	product: ProductListItemFragment,
): ProductListItemFragment => {
	return {
		id: product.id,
		name: product.name,
		categories: product.categories,
		price: product.price,
		images: [
			{
				url: product.images[0]?.url || "",
			},
		],
	};
};

import { type ProductResponseItemTypes } from "@/api/products/productsTypes";
import { type ProductListItemType } from "@/ui/molecules/ProductListItem/ProductListItemTypes";

export const getProductsList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");

	const productsResponse = (await res.json()) as ProductResponseItemTypes[];

	const products = productsResponse.map(productListItemTypeToProductListItemType);

	return products;
};

export const getProductById = async (id: ProductListItemType["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

	const productResponse = (await res.json()) as ProductResponseItemTypes;

	return productListItemTypeToProductListItemType(productResponse);
};

export const getProductsByNumber = async (number: number, page?: number) => {
	let baseUrl = `https://naszsklep-api.vercel.app/api/products?take=${number}`;

	if (page !== undefined) {
		const offset = number * (page - 1);
		baseUrl = `https://naszsklep-api.vercel.app/api/products?offset=${offset}&take=${number}`;
	}

	const res = await fetch(baseUrl);

	const productsResponse = (await res.json()) as ProductResponseItemTypes[];

	const products = productsResponse.map(productListItemTypeToProductListItemType);

	return products;
};

export const getNumberOfAllProducts = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=-1");

	const productsResponse = (await res.json()) as ProductResponseItemTypes[];

	return productsResponse.length;
};

const productListItemTypeToProductListItemType = (
	product: ProductResponseItemTypes,
): ProductListItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
		description: product.description,
	};
};

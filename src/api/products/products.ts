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
	};
};

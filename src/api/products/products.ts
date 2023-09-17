import { type ProductResponseItemTypes } from "@/api/products/productsTypes";
import { type ProductListItemType } from "@/ui/molecules/ProductListItem/ProductListItemTypes";

const productsEndPointInstance = `${process.env.API_BASE_URL}/products`;

export const getProductsList = async () => {
	const res = await fetch(productsEndPointInstance);

	const productsResponse = (await res.json()) as ProductResponseItemTypes[];

	const products = productsResponse.map(productListItemTypeToProductListItemType);

	return products;
};

export const getProductById = async (id: ProductListItemType["id"]) => {
	const res = await fetch(`${productsEndPointInstance}/${id}`);

	const productResponse = (await res.json()) as ProductResponseItemTypes;

	return productListItemTypeToProductListItemType(productResponse);
};

export const getProductsByNumber = async (number: number, page?: number) => {
	let baseUrl = `${productsEndPointInstance}?take=${number}`;

	if (page !== undefined) {
		const offset = number * (page - 1);
		baseUrl = `${productsEndPointInstance}?offset=${offset}&take=${number}`;
	}

	const res = await fetch(baseUrl);

	const productsResponse = (await res.json()) as ProductResponseItemTypes[];

	const products = productsResponse.map(productListItemTypeToProductListItemType);

	return products;
};

export const getNumberOfAllProducts = async () => {
	const res = await fetch(`${productsEndPointInstance}?take=-1`, {
		next: { revalidate: 1000 * 60 * 30 },
	});

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

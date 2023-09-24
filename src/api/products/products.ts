import { executeGraphql } from "../grapghqlApiInstance";
import { type ProductResponseItemTypes } from "@/api/products/productsTypes";
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { type ProductListItemType } from "@/ui/molecules/ProductListItem/ProductListItemTypes";

const productsEndPointInstance = `${process.env.API_BASE_URL}/products`;

export const productsGetList = async (): Promise<ProductListItemType[]> => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products.map((product) => {
		return {
			id: product.id,
			category: product.categories[0]?.name || "",
			name: product.name,
			price: product.price,
			description: product.description,
			coverImage: product.images[0] && {
				src: product.images[0].url,
				alt: product.name,
			},
		};
	});
};

export const productsGetByCategorySlug = async (categorySlug: string) => {
	const categories = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: categorySlug,
	});

	const products = categories.categories[0]?.products;

	return products?.map((product) => {
		return {
			id: product.id,
			category: product.categories[0]?.name || "",
			name: product.name,
			price: product.price,
			description: product.description,
			coverImage: product.images[0] && {
				src: product.images[0].url,
				alt: product.name,
			},
		};
	});
};

export const productGetById = async (productId: string) => {
	const data = await executeGraphql(ProductGetByIdDocument, { id: productId });

	const product = data.product;

	if (product) {
		return {
			id: product.id,
			category: product.categories[0]?.name || "",
			name: product.name,
			price: product.price,
			description: product.description,
			coverImage: product.images[0] && {
				src: product.images[0].url,
				alt: product.name,
			},
		};
	}
};

export const getProductsList = async () => {
	const res = await fetch(productsEndPointInstance);

	const productsResponse = (await res.json()) as ProductResponseItemTypes[];

	const products = productsResponse.map(productListItemTypeToProductListItemType);

	return products;
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

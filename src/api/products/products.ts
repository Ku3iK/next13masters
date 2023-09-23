import { type ProductResponseItemTypes } from "@/api/products/productsTypes";
import { ProductsGetListDocument, type TypedDocumentString } from "@/gql/graphql";
import { type ProductListItemType } from "@/ui/molecules/ProductListItem/ProductListItemTypes";

const productsEndPointInstance = `${process.env.API_BASE_URL}/products`;

const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) throw new Error("GRAPHQL_URL is not defined");

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			ContentType: "application/json",
		},
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string[] } }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};

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

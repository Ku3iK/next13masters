import { executeGraphql } from "@/api/grapghqlApiInstance";
import {
	ProductsGetByNameDocument,
	type ProductsGetByNameQuery,
	type ProductsGetByNameQueryVariables,
} from "@/gql/graphql";
import { type ProductsGetByNameParams } from "@/services/api/products/productsGetByName/types";

export const productsGetByName = async ({
	name,
	limit,
}: ProductsGetByNameParams): Promise<ProductsGetByNameQuery["products"]> => {
	const variables: ProductsGetByNameQueryVariables = { name };

	if (limit) {
		variables.limit = limit;
	}

	const response = await executeGraphql<ProductsGetByNameQuery, ProductsGetByNameQueryVariables>({
		query: ProductsGetByNameDocument,
		variables,
	});

	return response.products;
};

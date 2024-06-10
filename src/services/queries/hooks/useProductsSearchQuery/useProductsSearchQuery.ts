import { useQuery } from "@tanstack/react-query";
import { productsGetByName } from "@/services/api/products/productsGetByName";
import { type ProductsGetByNameQuery } from "@/gql/graphql";
import { type ProductsGetByNameParams } from "@/services/api/products/productsGetByName/types";
import { type GenericUseQueryOptions } from "@/services/types";

export const PRODUCTS_SEARCH = "products_search";

export const getProductsSearchQueryKey = (params: ProductsGetByNameParams) => [
	PRODUCTS_SEARCH,
	params,
];

export const useProductsSearchQuery = (
	params: ProductsGetByNameParams,
	options?: GenericUseQueryOptions<ProductsGetByNameQuery["products"]>,
) => {
	return useQuery({
		queryKey: getProductsSearchQueryKey(params),
		queryFn: () => productsGetByName(params),
		...options,
	});
};

import { CategoryGetTotalProductsNumberDocument } from "@/gql/graphql";
import { executeGraphql } from "../grapghqlApiInstance";

export const categoryGetTotalProductsNumber = async () => {
	const response = await executeGraphql(CategoryGetTotalProductsNumberDocument, {});

	return response.productsConnection.aggregate.count;
};

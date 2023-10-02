import { executeGraphql } from "../grapghqlApiInstance";
import { CategoryGetTotalProductsNumberDocument } from "@/gql/graphql";

export const categoryGetTotalProductsNumber = async () => {
	const response = await executeGraphql(CategoryGetTotalProductsNumberDocument, {});

	return response.productsConnection.aggregate.count;
};

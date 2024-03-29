import { executeGraphql } from "../grapghqlApiInstance";
import { CollectionsGetListDocument, CollectionsGetSlugsDocument } from "@/gql/graphql";

export const collectionsGetList = async () => {
	const response = await executeGraphql({ query: CollectionsGetListDocument });

	return response.collections;
};

export const collectionsGetSlugs = async () => {
	const response = await executeGraphql({ query: CollectionsGetSlugsDocument });

	return response.collections;
};

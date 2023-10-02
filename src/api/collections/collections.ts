import { executeGraphql } from "../grapghqlApiInstance";
import { CollectionsGetListDocument, CollectionsGetSlugsDocument } from "@/gql/graphql";

export const collectionsGetList = async () => {
	const response = await executeGraphql(CollectionsGetListDocument, {});

	return response.collections;
};

export const collectionsGetSlugs = async () => {
	const response = await executeGraphql(CollectionsGetSlugsDocument, {});

	return response.collections;
};

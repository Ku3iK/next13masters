"use server";

import { executeGraphql } from "../grapghqlApiInstance";
import { CartChangeItemQuantityDocument, CartRemoveItemDocument } from "@/gql/graphql";

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	return executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: { itemId, quantity },
		headers: {
			Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
		},
	});
};

export const removeItem = async (itemId: string) => {
	return executeGraphql({
		query: CartRemoveItemDocument,
		variables: { itemId },
		headers: {
			Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
		},
	});
};

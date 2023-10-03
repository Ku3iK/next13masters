"use server";

import { executeGraphql } from "../grapghqlApiInstance";
import { CartChangeItemQuantityDocument, CartRemoveItemDocument } from "@/gql/graphql";

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	return executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: { itemId, quantity },
	});
};

export const removeItem = async (itemId: string) => {
	return executeGraphql({
		query: CartRemoveItemDocument,
		variables: { itemId },
	});
};

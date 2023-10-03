import { cookies } from "next/headers";
import { executeGraphql } from "../grapghqlApiInstance";
import {
	CartGetByIdDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddItemDocument,
} from "@/gql/graphql";

async function createCart() {
	return executeGraphql({ query: CartCreateDocument });
}

export async function getCartById(cartId: string) {
	return executeGraphql({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		cache: "no-store",
	});
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const cart = await getCartById(cartId);

		if (cart.order) {
			return cart.order;
		}
	}
}

export async function getOrCreateCart() {
	const existingCart = await getCartFromCookies();

	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();

	if (!cart.createOrder?.id) {
		throw new Error("Cart not created");
	}

	cookies().set("cartId", cart.createOrder.id, {
		httpOnly: true,
		sameSite: "lax",
	});

	return cart.createOrder;
}

export async function addProductToCart(cartId: string, productId: string) {
	const product = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: productId },
	});

	if (!product.product) {
		throw new Error("Product not found");
	}

	await executeGraphql({
		query: CartAddItemDocument,
		variables: { cartId, productId, total: product.product.price },
	});
}

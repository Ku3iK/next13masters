import { revalidateTag } from "next/cache";
import { addProductToCart, getOrCreateCart } from "@/api/cart/cart";

export async function addProductToCartServerAction(productId: string) {
	"use server";

	const cart = await getOrCreateCart();
	await addProductToCart(cart.id, productId);

	revalidateTag("cart");
}

import { ProductList } from "../ProductList/ProductList";
import { getProductsList } from "@/api/products/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProducts = async () => {
	const products = await getProductsList();
	await sleep(5000);
	return <ProductList products={products.slice(-4)} />;
};
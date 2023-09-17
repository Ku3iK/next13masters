import { ProductList } from "../ProductList/ProductList";
import { getProductsList } from "@/api/products/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProducts = async ({ isListView }: { isListView: boolean }) => {
	const products = await getProductsList();
	await sleep(5000);
	return (
		<>
			<h2 className="mb-4 text-2xl font-bold">Polecane produkty</h2>
			<ProductList products={products.slice(-4)} isListView={isListView} />
		</>
	);
};

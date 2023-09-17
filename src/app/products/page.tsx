import Link from "next/link";
import { getProductsByNumber } from "@/api/products/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export default async function ProductsPage() {
	const products = await getProductsByNumber(20);

	return (
		<>
			<ProductList products={products} />
			<div className="flex items-center justify-center">
				<Link
					href="/products/1"
					className="mt-10 rounded-md border border-slate-200 px-4 transition-colors duration-300 ease-in-out hover:bg-slate-400 hover:text-white"
				>
					Zobacz więcej
				</Link>
			</div>
		</>
	);
}

import { Suspense } from "react";
import { type Metadata } from "next/types";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { productGetById, productsGetList } from "@/api/products/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts/SuggestedProducts";
import { ProductImage } from "@/ui/atoms/ProductImage/ProductImage";
import { formatMoney } from "@/utils/formatMoney";
import { StockStatus } from "@/ui/atoms/StockStatus/StockStatus";
import { addProductToCart, getOrCreateCart } from "@/api/cart/cart";

export const generateStaticParams = async () => {
	const products = await productsGetList();

	return products.map((product) => ({
		productId: product.id,
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await productGetById(params.productId);

	if (!product) notFound();

	return {
		title: `${product.name} - Sklep internetowy`,
		description: product.description,
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await productGetById(params.productId);

	if (!product) notFound();

	async function addProductToCartAction(_formData: FormData) {
		"use server";

		const cart = await getOrCreateCart();

		cookies().set("cartId", cart.id, {
			httpOnly: true,
			sameSite: "lax",
			secure: true,
		});

		await addProductToCart(cart.id, params.productId);
	}

	return (
		<div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-12 gap-x-8 bg-white">
			<main className="col-span-9 px-8 py-4 shadow-xl">
				<article className="flex w-full flex-col gap-12 md:flex-row">
					{product.images[0] && (
						<ProductImage image={{ src: product.images[0].url, alt: product.name }} />
					)}
					<div>
						<h1 className="mb-10 font-bold">{product.name}</h1>
						<p className="mb-6">{product.description}</p>
						{product.categories[0] && (
							<p className="mb-6">
								Category: <span className="font-medium">{product.categories[0].name}</span>
							</p>
						)}
						<p className="mb-4 text-sm font-medium text-gray-900">
							Price: {formatMoney(product.price / 100)}
						</p>

						<StockStatus isAvailable={true} />

						<form action={addProductToCartAction}>
							<button
								type="submit"
								className="mt-4 rounded-sm border bg-slate-200 px-6 py-2 shadow-sm transition-colors hover:bg-slate-400"
							>
								Add to cart
							</button>
						</form>
					</div>
				</article>
			</main>
			<aside className="col-span-3 px-8 py-4 shadow-xl">
				<Suspense fallback={"Loading..."}>
					<SuggestedProducts isListView={true} />
				</Suspense>
			</aside>
		</div>
	);
}

import { Suspense } from "react";
import { type Metadata } from "next/types";
import { notFound } from "next/navigation";
import { revalidateTag } from "next/cache";
import { productGetById, productsGetList } from "@/api/products/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts/SuggestedProducts";
import { ProductImage } from "@/ui/atoms/ProductImage/ProductImage";
import { formatMoney } from "@/utils/formatMoney";
import { StockStatus } from "@/ui/atoms/StockStatus/StockStatus";
import { addProductToCart, getOrCreateCart } from "@/api/cart/cart";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton/AddToCartButton";
import { ProductReviewForm } from "@/ui/organisms/ProductReviewForm/ProductReviewForm";

export const generateStaticParams = async () => {
	const products = await productsGetList();

	return products.slice(0, 5).map((product) => ({
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
		await addProductToCart(cart.id, params.productId);

		revalidateTag("cart");
	}

	return (
		<div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-12 gap-x-8 bg-white">
			<main className="col-span-9 px-8 py-4 shadow-xl">
				<article className="flex w-full flex-col gap-12">
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

						<form className="mb-28" action={addProductToCartAction}>
							<AddToCartButton />
						</form>

						<ProductReviewForm productId={params.productId} reviews={product.reviews} />
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

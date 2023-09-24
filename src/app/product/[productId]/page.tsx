import { Suspense } from "react";
import { type Metadata } from "next/types";
import { notFound } from "next/navigation";
import { productGetById, productsGetList } from "@/api/products/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription/ProductListItemDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemImage/ProductListItemImage";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts/SuggestedProducts";

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

	return (
		<div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-12 gap-x-8 bg-white">
			<main className="col-span-9 px-8 py-4 shadow-xl">
				<article className="max-w-xs">
					<h1>{product.name}</h1>
					{product.coverImage && (
						<ProductCoverImage
							image={{ src: product.coverImage.src, alt: product.coverImage.alt }}
						/>
					)}
					<ProductListItemDescription product={product} />
					<p>{product.description}</p>
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

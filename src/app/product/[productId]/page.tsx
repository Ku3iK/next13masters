import { Suspense } from "react";
import { type Metadata } from "next/types";
import { getProductById, getProductsList } from "@/api/products/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription/ProductListItemDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemImage/ProductListItemImage";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts/SuggestedProducts";

export const generateStaticParams = async () => {
	const products = await getProductsList();

	return products.map((product) => ({
		productId: product.id,
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `${product.name} - Sklep internetowy`,
		description: product.description,
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-12 gap-x-8 bg-white">
			<main className="col-span-9 px-8 py-4 shadow-xl">
				<article className="max-w-xs">
					<ProductCoverImage image={{ src: product.coverImage.src, alt: product.coverImage.alt }} />
					<ProductListItemDescription product={product} />
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

import { Suspense } from "react";
import { getProductById } from "@/api/products/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription/ProductListItemDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemImage/ProductListItemImage";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts/SuggestedProducts";

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<>
			<article className="max-w-xs">
				<ProductCoverImage image={{ src: product.coverImage.src, alt: product.coverImage.alt }} />
				<ProductListItemDescription product={product} />
			</article>
			<aside>
				<Suspense fallback={"Loading..."}>
					<SuggestedProducts />
				</Suspense>
			</aside>
		</>
	);
}

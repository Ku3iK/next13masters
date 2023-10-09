import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemImage/ProductListItemImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription/ProductListItemDescription";
import { type ProductWithAverageRating } from "@/utils/addAverageRatingToProducts";

export const ProductListItem = ({ product }: { product: ProductWithAverageRating }) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					{product.images[0] && (
						<ProductCoverImage image={{ src: product.images[0].url, alt: product.name }} />
					)}
					<ProductListItemDescription product={product} />
					{product.averageRating && (
						<p>
							Ocena:
							<span data-testid="product-rating" className="font-medium">
								{product.averageRating.toFixed(2)}
							</span>
						</p>
					)}
				</article>
			</Link>
		</li>
	);
};

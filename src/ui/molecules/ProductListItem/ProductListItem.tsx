import Link from "next/link";
import { type ProductListItemsProps } from "./ProductListItemTypes";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemImage/ProductListItemImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription/ProductListItemDescription";

export const ProductListItem = ({ product }: ProductListItemsProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					{product.coverImage && (
						<ProductCoverImage
							image={{ src: product.coverImage.src, alt: product.coverImage.alt }}
						/>
					)}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};

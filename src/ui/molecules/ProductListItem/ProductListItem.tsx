import { type ProductListItemsProps } from "./ProductListItemTypes";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemImage/ProductListItemImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription/ProductListItemDescription";

export const ProductListItem = ({ product }: ProductListItemsProps) => {
	return (
		<li className="cursor-pointer">
			<article>
				<ProductCoverImage image={{ src: product.coverImage.src, alt: product.coverImage.alt }} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};

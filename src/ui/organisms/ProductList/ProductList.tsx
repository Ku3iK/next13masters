import clsx from "clsx";
import { ProductListItem } from "@/ui/molecules/ProductListItem/ProductListItem";
import { type ProductWithAverageRating } from "@/utils/addAverageRatingToProducts";

export const ProductList = ({
	products,
	isListView = false,
}: {
	products: ProductWithAverageRating[];
	isListView?: boolean;
}) => {
	return (
		<ul
			data-testid="products-list"
			className={clsx(`grid grid-cols-1 gap-8`, {
				"sm:grid-cols-2 lg:grid-cols-4": !isListView,
			})}
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};

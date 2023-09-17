import clsx from "clsx";
import { type ProductsListType } from "./ProductListTypes";
import { ProductListItem } from "@/ui/molecules/ProductListItem/ProductListItem";

export const ProductList = ({ products, isListView = false }: ProductsListType) => {
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

import { type ProductsListType } from "./ProductListTypes";
import { ProductListItem } from "@/ui/molecules/ProductListItem/ProductListItem";

export const ProductList = ({ products }: ProductsListType) => {
	return (
		<ul data-testid="products-list">
			<ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{products.map((product) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
		</ul>
	);
};

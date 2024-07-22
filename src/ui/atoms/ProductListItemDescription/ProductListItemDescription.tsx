import { type ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils/formatMoney";

export const ProductListItemDescription = ({
	product: { name, categories, price },
}: {
	product: ProductListItemFragment;
}) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="test-sm font-semibold text-gray-700">{name}</h3>
				{categories[0] && (
					<p className="text-sm text-gray-500">
						<span className="sr-only">Category:</span> {categories[0].name}
					</p>
				)}
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Price:</span>{" "}
				<span data-testid="product-price">{formatMoney(price)}</span>
			</p>
		</div>
	);
};

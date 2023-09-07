import { type ProductListItemsProps } from "@/ui/molecules/ProductListItem/ProductListItemTypes";
import { formatMoney } from "@/utils/formatMoney";

export const ProductListItemDescription = ({
	product: { name, category, price },
}: ProductListItemsProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="test-sm font-semibold text-gray-700">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Category:</span> {category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Price:</span> {formatMoney(price / 100)}
			</p>
		</div>
	);
};

import { Check, X } from "lucide-react";

export const StockStatus = ({ isAvailable }: { isAvailable: boolean }) => {
	return (
		<div className="flex items-center gap-3">
			{isAvailable ? (
				<>
					<Check size={24} color="green" /> <p>In Stock</p>
				</>
			) : (
				<>
					<X size={24} color="red" /> <p>Out of stock</p>
				</>
			)}
		</div>
	);
};

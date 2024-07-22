import { Check, X } from "lucide-react";
import { type StockStatusProps } from "@/components/views/StockStatus/types";

export const StockStatus = ({ isAvailable }: StockStatusProps) => {
	return (
		<div className="flex items-center gap-1">
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

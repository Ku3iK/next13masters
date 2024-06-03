"use client";

import { useOptimistic } from "react";
import { changeItemQuantity } from "@/api/cart/actions";

export const ChangeProductQuantity = ({
	itemId,
	quantity,
}: {
	itemId: string;
	quantity: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

	return (
		<form>
			<button
				data-testid="decrement"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1);
				}}
				className="ml-2 h-8 w-8 border bg-slate-50"
			>
				-
			</button>
			<span data-testid="quantity">{optimisticQuantity}</span>
			<button
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
				className="ml-2 h-8 w-8 border bg-slate-50"
			>
				+
			</button>
		</form>
	);
};

"use client";

import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<button
			data-testid="add-to-cart-button"
			type="submit"
			disabled={formStatus.pending}
			className="mt-4 rounded-sm border bg-slate-200 px-6 py-2 shadow-sm transition-colors hover:bg-slate-400"
		>
			Add to cart
		</button>
	);
};

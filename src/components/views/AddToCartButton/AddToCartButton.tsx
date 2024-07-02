"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export const AddToCartButton = ({ isDisabled }: { isDisabled?: boolean }) => {
	const formStatus = useFormStatus();

	return (
		<Button
			size={"lg"}
			className={"w-full"}
			data-testid="add-to-cart-button"
			type="submit"
			disabled={formStatus.pending || isDisabled}
		>
			Add to cart
		</Button>
	);
};

import NextLink from "next/link";
import { type ProductDetailsProps } from "@/components/views/ProductDetails/types";
import { addProductToCartServerAction } from "@/utils/cart/addProductToCartServerAction";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton/AddToCartButton";
import { StockStatus } from "@/components/views/StockStatus";
import { formatMoney } from "@/utils/formatMoney";
import { routes } from "@/routes";

export const ProductDetails = (props: ProductDetailsProps) => {
	const { id, name, description, category, inStock, price } = props;

	async function handleAddProductToCartAction(_formData: FormData) {
		"use server";

		await addProductToCartServerAction(id);
	}

	return (
		<div className="grid items-center gap-6">
			<div className={"flex flex-col gap-4"}>
				<h1 className="text-3xl font-bold">{name}</h1>
				<p className="text-muted-foreground">{description}</p>
			</div>
			<div className="grid gap-4 md:grid-cols-2">
				<div className={"flex flex-col gap-2"}>
					<p className="text-sm font-bold text-primary">Category</p>
					<p>
						<NextLink href={routes.categories.url({ category: category || "" })}>
							{category}
						</NextLink>
					</p>
				</div>
				<div className={"flex flex-col gap-2"}>
					<p className="text-sm font-bold text-primary">Stock</p>
					<StockStatus isAvailable={inStock} />
				</div>
			</div>
			<p className="text-4xl font-bold">{formatMoney(price)}</p>
			<form
				action={handleAddProductToCartAction}
				className={`h-fit ${!inStock && "cursor-not-allowed"}`}
			>
				<AddToCartButton isDisabled={!inStock} />
			</form>
		</div>
	);
};

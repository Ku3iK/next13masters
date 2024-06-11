import { type ShoppingCartQuantityProps } from "@/components/views/ShoppingCartQuantity/types";
import { Skeleton } from "@/components/ui/skeleton";

export const ShoppingCartQuantity = ({ quantity }: ShoppingCartQuantityProps) => {
	return <span className="text-sm font-medium">{quantity}</span>;
};

export const ShoppingCartQuantitySkeleton = () => {
	return <Skeleton className={"h-5 w-2"} />;
};

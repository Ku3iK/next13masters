import { type ProductListItemType } from "@/ui/molecules/ProductListItem/ProductListItemTypes";

export type ProductsListType = {
	products: ProductListItemType[];
	isListView?: boolean;
};

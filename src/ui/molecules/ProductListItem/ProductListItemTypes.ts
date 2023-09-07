export type ProductListItemType = {
	id: string;
	name: string;
	category: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
		width?: number;
		height?: number;
	};
};

export type ProductListItemsProps = {
	product: ProductListItemType;
};

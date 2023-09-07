import { type ProductListItemType } from "@/ui/molecules/ProductListItem/ProductListItemTypes";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

const products: ProductListItemType[] = [
	{
		id: "1",
		name: "Wedding ring",
		category: "Wedding",
		price: 3000,
		coverImage: {
			src: "/product_1.jpg",
			alt: "Wedding ring",
		},
	},
	{
		id: "2",
		name: "SSD Disk",
		category: "PC",
		price: 3000,
		coverImage: {
			src: "/product_2.jpg",
			alt: "SSD Disk",
		},
	},
	{
		id: "3",
		name: "T-shirt",
		category: "Fashion",
		price: 3000,
		coverImage: {
			src: "/product_3.jpg",
			alt: "T-shirt",
		},
	},
	{
		id: "4",
		name: "Ring",
		category: "Jewelry",
		price: 3000,
		coverImage: {
			src: "/product_4.jpg",
			alt: "Ring",
		},
	},
];

export default function Products() {
	return (
		<section className="mx-auto min-h-screen max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}

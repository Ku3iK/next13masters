import { productsGetListWithRates } from "@/api/products/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export default async function ProductsPage() {
	const products = await productsGetListWithRates();

	const mappedProducts = products.map((product) => {
		const totalRating = product.reviews.reduce((acc, review) => acc + review.rating, 0);
		const averageRating = product.reviews.length ? totalRating / product.reviews.length : 0;

		return {
			...product,
			totalRating,
			averageRating,
		};
	});

	const sortedProducts = mappedProducts.sort((a, b) => b.averageRating - a.averageRating);

	return (
		<>
			<h1>Ranking produktów</h1>
			<ProductList products={sortedProducts} />
		</>
	);
}

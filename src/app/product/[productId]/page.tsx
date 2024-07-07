import { notFound } from "next/navigation";
import { productGetById, productsGetList } from "@/api/products/products";
import { ProductImage } from "@/components/views/ProductImage";
import { type PageMetadata } from "@/app/types";
import { type ProductPageParams } from "@/app/product/[productId]/types";
import { generatePageTitle } from "@/utils/metadata/generatePageTitle";
import { ProductDetails } from "@/components/views/ProductDetails";
import { LatestProductsSuspense } from "@/components/containers/LatestProducts";
import { ProductReviewsSuspense } from "@/components/containers/ProductReviews";

export const generateStaticParams = async () => {
	const products = await productsGetList();

	return products.slice(0, 5).map(({ id: productId }) => ({
		productId,
	}));
};

export const generateMetadata = async ({ params }: ProductPageParams): PageMetadata => {
	const product = await productGetById(params.productId);

	if (!product) notFound();

	const { name, description } = product;

	return {
		title: generatePageTitle(name),
		description,
	};
};

export default async function SingleProductPage({ params }: ProductPageParams) {
	const { productId } = params;
	const product = await productGetById(productId);

	if (!product) notFound();

	const { images, name, categories, ...restProps } = product;
	const productThumbnail = images[0];

	return (
		<div className="flex min-h-screen w-full flex-col">
			<div className="relative grid gap-8 py-12 md:grid-cols-2">
				{productThumbnail && (
					<div className={"mx-auto md:mx-0"}>
						<ProductImage image={{ src: productThumbnail.url, alt: name }} />
					</div>
				)}
				<div className={"sticky top-24 h-fit"}>
					<ProductDetails {...restProps} name={name} category={categories[0]?.name} />
				</div>
			</div>
			<div className="col-span-2 grid gap-8">
				<LatestProductsSuspense />
				<ProductReviewsSuspense productId={productId} />
			</div>
		</div>
	);
}

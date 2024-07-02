import { notFound } from "next/navigation";
import { StarIcon } from "lucide-react";
import { productGetById, productsGetList } from "@/api/products/products";
import { ProductImage } from "@/components/views/ProductImage";
import { type PageMetadata } from "@/app/types";
import { type ProductPageParams } from "@/app/product/[productId]/types";
import { generatePageTitle } from "@/utils/metadata/generatePageTitle";
import { ProductDetails } from "@/components/views/ProductDetails";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LatestProductsSuspense } from "@/components/containers/LatestProducts";

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

	const { images, name, reviews: _reviews, categories, ...restProps } = product;
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
				{/* TODO: separate component below to file */}
				<div>
					<h2 className="text-2xl font-bold">Product Reviews</h2>
					<div className="mt-4 grid gap-6">
						<div className="flex gap-4">
							<Avatar className="h-10 w-10 border">
								<AvatarImage src="/placeholder-user.jpg" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<div className="grid gap-2">
								<div className="flex items-center gap-2">
									<h3 className="font-semibold">Sarah Johnson</h3>
									<div className="flex items-center gap-0.5 text-primary">
										<StarIcon className="h-5 w-5" />
										<StarIcon className="h-5 w-5" />
										<StarIcon className="h-5 w-5" />
										<StarIcon className="h-5 w-5" />
										<StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
									</div>
								</div>
								<p className="text-muted-foreground">
									I've been using these headphones for a few weeks and they've been a game-changer.
									The sound quality is incredible, and the wireless connectivity is seamless. Highly
									recommended!
								</p>
							</div>
						</div>
						<div className="flex gap-4">
							<Avatar className="h-10 w-10 border">
								<AvatarImage src="/placeholder-user.jpg" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<div className="grid gap-2">
								<div className="flex items-center gap-2">
									<h3 className="font-semibold">Alex Smith</h3>
									<div className="flex items-center gap-0.5 text-primary">
										<StarIcon className="h-5 w-5" />
										<StarIcon className="h-5 w-5" />
										<StarIcon className="h-5 w-5" />
										<StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
										<StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
									</div>
								</div>
								<p className="text-muted-foreground">
									The battery life on these headphones is impressive, lasting me for long flights
									without any issues. They are comfortable to wear for extended periods, and the
									sound quality is great. Worth every penny.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

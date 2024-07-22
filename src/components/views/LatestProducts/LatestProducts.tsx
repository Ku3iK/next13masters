import NextLink from "next/link";
import NextImage from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { type LatestProductsProps } from "@/components/views/LatestProducts/types";
import { routes } from "@/routes";
import { formatMoney } from "@/utils/formatMoney";
import { LatestProductsNotFound } from "@/components/views/LatestProducts/LatestProductsNotFound";
import { PRODUCT_PLACEHOLDER } from "@/app/constants/product";

export const LatestProducts = ({ products }: LatestProductsProps) => {
	if (!products?.length) {
		return <LatestProductsNotFound />;
	}

	return (
		<section aria-labelledby="latest-products-heading" data-testid="related-products">
			<h2 id="latest-products-heading" className="text-2xl font-bold">
				Latest Products
			</h2>
			<ul data-testid="products-list" className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{products.map(({ id, images, name, price }) => (
					<li key={id}>
						<NextLink href={routes.product.url({ id })} prefetch={false}>
							<Card>
								<CardContent>
									<NextImage
										src={images[0]?.url || PRODUCT_PLACEHOLDER}
										alt={name}
										width={300}
										height={300}
										className="m-4 w-full rounded-lg object-cover"
									/>
									<div className="mt-4">
										<h3 className="text-lg font-semibold">{name}</h3>
										<p className="text-muted-foreground">{formatMoney(price)}</p>
									</div>
								</CardContent>
							</Card>
						</NextLink>
					</li>
				))}
			</ul>
		</section>
	);
};

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
		<div>
			<h2 className="text-2xl font-bold">Latest Products</h2>
			<div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{products.map(({ id, images, name, price }) => (
					<NextLink key={id} href={routes.product.url({ id })} prefetch={false}>
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
				))}
			</div>
		</div>
	);
};

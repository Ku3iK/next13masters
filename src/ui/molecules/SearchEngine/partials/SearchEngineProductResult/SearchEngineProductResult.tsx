import NextLink from "next/link";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes";
import { formatMoney } from "@/utils/formatMoney";
import { type SearchEngineProductResultProps } from "@/ui/molecules/SearchEngine/partials/SearchEngineProductResult/types";

export const SearchEngineProductResult = ({
	id,
	images,
	name,
	price,
}: SearchEngineProductResultProps) => {
	return (
		<Button asChild variant={"ghost"} className={"group justify-start"}>
			<NextLink
				href={routes.product.url({ id })}
				className={"ju flex h-auto w-full items-center gap-4"}
				data-testid="product-link"
			>
				{images[0]?.url && (
					<NextImage
						src={images[0].url}
						alt={name}
						width={36}
						height={36}
						className={"aspect-square rounded bg-accent object-contain p-1"}
						data-testid="product-image"
					/>
				)}
				<div className={"flex flex-col gap-1"} data-testid="product-info">
					<p data-testid="product-name">{name}</p>
					<p data-testid="product-price">{formatMoney(price)}</p>
				</div>
			</NextLink>
		</Button>
	);
};

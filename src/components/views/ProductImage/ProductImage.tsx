import NextImage from "next/image";
import { type ProductImageProps } from "@/components/views/ProductImage/types";
import { PRODUCT_PLACEHOLDER } from "@/app/constants/product";

export const ProductImage = ({ image }: ProductImageProps) => {
	const { src, alt } = image;

	return (
		<div className="aspect-square max-w-lg overflow-hidden rounded-md border bg-slate-50">
			<NextImage
				width={400}
				height={400}
				alt={alt}
				src={src || PRODUCT_PLACEHOLDER}
				className="w-full rounded-lg object-cover object-center p-4"
			/>
		</div>
	);
};

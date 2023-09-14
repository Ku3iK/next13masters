import { type ProductCoverImageProps } from "./ProductListItemImageTypes";

export const ProductCoverImage = ({
	image: { src, alt, width = 320, height = 320 },
}: ProductCoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				src={src}
				alt={alt}
				width={width}
				height={height}
				className="h-full w-full object-contain object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};

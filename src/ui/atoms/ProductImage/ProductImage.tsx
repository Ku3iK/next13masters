import NextImage from "next/image";

export const ProductImage = ({ image: { src, alt } }: { image: { src: string; alt: string } }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50">
			<NextImage
				width={1000}
				height={1000}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4"
			/>
		</div>
	);
};

import NextImage from "next/image";

export const ProductImage = ({ image: { src, alt } }: { image: { src: string; alt: string } }) => {
	return (
		<div className="max-w-lg aspect-square overflow-hidden rounded-md border bg-slate-50">
			<NextImage
				width={500}
				height={500}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4"
			/>
		</div>
	);
};

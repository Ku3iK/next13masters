import { notFound } from "next/navigation";
import { productGetById } from "@/api/products/products";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
	width: 1200,
	height: 630,
};

export const generateAlt = async () => {};

export const contentType = "image/png";

export default async function Image({ params }: { params: { productId: string } }) {
	const product = await productGetById(params.productId);

	if (!product) notFound();

	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 128,
					background: "white",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{product.name}
			</div>
		),
	);
}

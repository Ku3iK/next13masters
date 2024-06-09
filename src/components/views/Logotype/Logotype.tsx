import NextImage from "next/image";

export const Logotype = () => {
	return (
		<NextImage
			src={"/site-branding/vibe-wear-logotype.svg"}
			alt={"VibeWear logotype"}
			width={200}
			height={40}
			style={{
				objectFit: "contain",
			}}
		/>
	);
};

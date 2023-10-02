import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { collectionsGetSlugs } from "@/api/collections/collections";
import { productsGetByCollectionSlug } from "@/api/products/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export async function generateMetadata({
	params,
}: {
	params: { collection: string };
}): Promise<Metadata> {
	const { collectionName } = await productsGetByCollectionSlug(params.collection);

	return {
		title: collectionName,
		description: "Next13Masters - kurs",
	};
}

export async function generateStaticParams() {
	const collections = await collectionsGetSlugs();

	const mappedCollections = collections.map((category) => ({
		collection: category.slug,
	}));

	return mappedCollections;
}

export default async function CollectionPage({ params }: { params: { collection: string } }) {
	const { collectionName, products } = await productsGetByCollectionSlug(params.collection);

	if (!products) notFound();

	return (
		<div>
			<h1>{collectionName || "Collection"}</h1>
			<ProductList products={products} />
		</div>
	);
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { collectionsGetList } from "@/api/collections/collections";
import { CollectionListItem } from "@/ui/molecules/CollectionListItem/CollectionListItem";

export const metadata: Metadata = {
	title: "Collections",
	description: "Next13Masters - kurs",
};

export default async function CollectionsPage() {
	const collections = await collectionsGetList();

	if (!collections) notFound();

	return (
		<div>
			<h1 className="mb-12 font-bold">Collections</h1>
			<ul className="grid grid-cols-3 gap-4">
				{collections.map((collection) => (
					<CollectionListItem key={collection.id} collection={collection} />
				))}
			</ul>
		</div>
	);
}

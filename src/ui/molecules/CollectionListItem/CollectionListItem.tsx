import Link from "next/link";
import { type Route } from "next";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemImage/ProductListItemImage";
import { type CollectionListItemFragment } from "@/gql/graphql";

export const CollectionListItem = ({ collection }: { collection: CollectionListItemFragment }) => {
	return (
		<li>
			<Link href={`/collections/${collection.slug}` as Route}>
				<article>
					{collection.image && (
						<ProductCoverImage image={{ src: collection.image.url, alt: collection.name }} />
					)}
					<h2 className="mt-4 font-medium text-slate-700">{collection.name}</h2>
				</article>
			</Link>
		</li>
	);
};

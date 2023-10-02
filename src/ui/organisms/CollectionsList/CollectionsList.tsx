import { type CollectionListItemFragment } from "@/gql/graphql";
import { CollectionListItem } from "@/ui/molecules/CollectionListItem/CollectionListItem";

export const CollectionsList = ({ collections }: { collections: CollectionListItemFragment[] }) => {
	if (!collections.length) {
		return <h2>We dont have any collections now...</h2>;
	}

	return (
		<>
			<h2>Our collections</h2>
			<ul
				data-testid="collections-list"
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			>
				{collections.map((collection) => (
					<CollectionListItem key={collection.id} collection={collection} />
				))}
			</ul>
		</>
	);
};

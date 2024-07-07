import { type ReviewsByProductIdQuery } from "@/gql/graphql";

export type SingleReviewProps = {
	image?: string;
	name: string;
	rating: number;
	content: string;
};

export type ReviewsProps = {
	reviews: ReviewsByProductIdQuery["reviews"] | undefined;
};

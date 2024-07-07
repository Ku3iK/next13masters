import { StarIcon } from "lucide-react";
import { type StarRatingProps } from "@/components/views/StarRating/types";

export const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating - fullStars >= 0.5;
	const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

	return (
		<div className="flex items-center gap-0.5 text-primary">
			{Array(fullStars)
				.fill(0)
				.map((_, index) => (
					<StarIcon key={`full-${index}`} className={"h-5 w-5 text-yellow-500"} />
				))}
			{hasHalfStar && (
				<StarIcon key="half" className={"h-5 w-5 fill-current stroke-current text-yellow-500"} />
			)}
			{Array(emptyStars)
				.fill(0)
				.map((_, index) => (
					<StarIcon key={`empty-${index}`} className={"h-5 w-5 text-gray-300"} />
				))}
		</div>
	);
};

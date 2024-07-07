import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/utils/stringUtils/getInitials";
import { StarRating } from "@/components/views/StarRating";
import { type SingleReviewProps } from "@/components/views/Reviews/types";

export const SingleReview = ({ image, name, rating, content }: SingleReviewProps) => {
	return (
		<div className="flex gap-4">
			<Avatar className="h-10 w-10 border">
				<AvatarImage src={image} />
				<AvatarFallback>{getInitials(name)}</AvatarFallback>
			</Avatar>
			<div className="grid gap-2">
				<div className="flex flex-wrap items-center gap-2">
					<h3 className="font-semibold">{name}</h3>
					<StarRating rating={rating} />
				</div>
				<p className="text-muted-foreground">{content}</p>
			</div>
		</div>
	);
};

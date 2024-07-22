import { AlertCircle } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

export const ReviewsNotFound = () => {
	return (
		<Alert variant="default">
			<AlertCircle className="h-4 w-4" />
			<AlertTitle>No reviews</AlertTitle>
			<Alert className={"border-0 text-inherit"}>
				There are no reviews for this product yet. Be the first to leave a review!
			</Alert>
		</Alert>
	);
};

import { AlertCircle } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

export const ReviewsNotFound = () => {
	return (
		<Alert variant="destructive">
			<AlertCircle className="h-4 w-4" />
			<AlertTitle>Error</AlertTitle>
			<Alert className={"border-0 text-inherit"}>
				Failed to load reviews. If the problem continues contact the administrator
			</Alert>
		</Alert>
	);
};

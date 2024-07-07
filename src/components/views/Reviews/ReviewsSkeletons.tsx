import { StarRating } from "@/components/views/StarRating";
import { Skeleton } from "@/components/ui/skeleton";

export const ReviewSkeleton = () => {
	return (
		<div className="flex gap-4 p-1">
			<Skeleton className="aspect-square size-12 min-w-12 rounded-full" />
			<div className="grid w-full gap-2">
				<div className="flex items-center gap-2">
					<Skeleton className="h-4 w-full max-w-[150px]" />
					<StarRating rating={0} />
				</div>
				<Skeleton className="h-4 w-full max-w-[300px]" />
				<Skeleton className="mt-1 h-4 w-full max-w-[300px]" />
				<Skeleton className="mt-1 h-4 w-full max-w-[250px]" />
			</div>
		</div>
	);
};

export const ReviewsSkeleton = () => {
	return (
		<div>
			<p id="reviews-heading" className="text-2xl font-bold">
				Product Reviews
			</p>
			<ul className="mt-4 grid gap-6">
				{Array(3)
					.fill(0)
					.map((_, index) => (
						<li key={index}>
							<ReviewSkeleton />
						</li>
					))}
			</ul>
		</div>
	);
};

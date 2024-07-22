import { Skeleton } from "@/components/ui/skeleton";

export const LatestProductsSkeleton = () => {
	const skeletonItems = Array(4).fill(null);

	return (
		<div className="col-span-2 grid gap-8 px-4 md:px-0">
			<div>
				<h2 className="text-2xl font-bold">Latest Products</h2>
				<div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{skeletonItems.map((_, index) => (
						<div key={index} className="grid gap-4">
							<Skeleton className="h-[300px] w-full rounded-lg" />
							<Skeleton className="h-6 w-[60%]" />
							<Skeleton className="h-6 w-[40%]" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

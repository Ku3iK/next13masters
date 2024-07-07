import { type ReviewsProps } from "@/components/views/Reviews/types";
import { ReviewsNotFound } from "@/components/views/Reviews/ReviewsNotFound";
import { SingleReview } from "@/components/views/Reviews/SingleReview";

export const Reviews = ({ reviews }: ReviewsProps) => {
	if (!reviews?.length) {
		return <ReviewsNotFound />;
	}

	return (
		<section aria-labelledby="reviews-heading">
			<h2 id="reviews-heading" className="text-2xl font-bold">
				Product Reviews
			</h2>
			<ul className="mt-4 grid gap-6">
				{reviews?.map(({ id, publishedBy, name, content, email, rating }) => {
					const nameOfOpinionMaker = name || email;

					return (
						<li key={id}>
							<SingleReview
								image={publishedBy?.picture || undefined}
								name={nameOfOpinionMaker}
								rating={rating}
								content={content}
							/>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

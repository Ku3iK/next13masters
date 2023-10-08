"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { Input } from "@/ui/atoms/Input/Input";
import { productAddReview, publishProductReviewById } from "@/api/products/products";

type Review = {
	headline: string;
	name: string;
	email: string;
	content: string;
	rating: number;
};

export const ProductReviewForm = ({
	productId,
	reviews,
}: {
	productId: string;
	reviews: Review[];
}) => {
	const [optimisticReviews, addOptimisticReviews] = useOptimistic<Review[]>(reviews || []);

	return (
		<div className="flex flex-col gap-24">
			<form
				data-testid="add-review-form"
				className="border-b-2 border-dashed border-slate-200 pb-6"
				action={async (formData: FormData) => {
					const review = {
						headline: formData.get("title") as string,
						name: formData.get("name") as string,
						email: formData.get("email") as string,
						content: formData.get("content") as string,
						rating: Number(formData.get("rating")),
					};

					const reviewId = await productAddReview(
						review.headline,
						review.name,
						review.email,
						review.content,
						review.rating,
						productId,
					);

					if (reviewId) {
						addOptimisticReviews((prev) => [...prev, review]);
						await publishProductReviewById(reviewId);
					}
				}}
			>
				<fieldset className="flex flex-col gap-4">
					<legend className="mb-6">Add Your opinion</legend>
					<Input type={"text"} name={"headline"} placeholder={"Title"} required />
					<Input type={"textarea"} name={"content"} placeholder={"Content"} required />
					<Input type={"text"} name={"name"} placeholder={"Name"} required />
					<Input type={"email"} name={"email"} placeholder={"E-mail"} required />
					<Input
						type={"range"}
						name={"rating"}
						placeholder={"Rating"}
						min={"0"}
						max={"5"}
						required
					/>
					<button
						type="submit"
						className="mt-4 rounded-sm border bg-slate-200 px-6 py-2 shadow-sm transition-colors hover:bg-slate-400"
					>
						Add review
					</button>
				</fieldset>
			</form>
			<ul>
				{optimisticReviews?.map((review: Review, index: number) => (
					<li key={`${review.email}-${review.name}-${index}`}>
						<h6>{review.headline}</h6>
						<p>{review.name}</p>
						<p>{review.email}</p>
						<p>{review.rating}</p>
						<p>{review.content}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

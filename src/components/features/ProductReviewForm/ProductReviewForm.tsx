"use client";

import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { StarIcon } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { type ProductReviewFormProps } from "@/components/features/ProductReviewForm/types";
import { useAddReviewMutation } from "@/services/mutations/hooks/reviews/useAddReviewMutation";
import { getReviewsByProductQueryKey } from "@/services/queries/hooks/reviews/useProductReviews";
import { addReviewFormSchema } from "@/lib/validators/ProductReviewFormValidator/ProductReviewFormValidator";
import { FormInput } from "@/components/containers/FormInput";
import { FormTextarea } from "@/components/containers/FormTextarea";

export const ProductReviewForm = ({ productId }: ProductReviewFormProps) => {
	const queryClient = useQueryClient();
	const [rating, setRating] = useState<number>(0);
	const { mutate: addReviewMutation, isPending } = useAddReviewMutation({
		onSuccess: () => {
			setTimeout(() => {
				void queryClient.invalidateQueries({
					queryKey: getReviewsByProductQueryKey({ productId }),
				});
			}, 500);
		},
		onError: () => {
			// 	TODO: add snackbar error message
		},
	});

	const formMethods = useForm<z.infer<typeof addReviewFormSchema>>({
		mode: "onChange",
		resolver: zodResolver(addReviewFormSchema),
		defaultValues: {
			// TODO: move key to constants
			name: "",
			headline: "",
			email: "",
			content: "",
			rating: 0,
		},
	});

	const { handleSubmit, setValue } = formMethods;

	const onReviewSubmit = (data: z.infer<typeof addReviewFormSchema>) => {
		addReviewMutation({
			...data,
			productId,
		});
	};

	useEffect(() => {
		setValue("rating", rating);
	}, [rating]);

	return (
		<Card className="mt-8">
			<CardHeader>
				<CardTitle>Write a Review</CardTitle>
				<CardDescription>Share your thoughts and experiences with this product.</CardDescription>
			</CardHeader>
			<CardContent>
				<FormProvider {...formMethods}>
					<form data-testid="add-review-form" onSubmit={handleSubmit(onReviewSubmit)}>
						<div className="grid gap-4">
							<FormInput name="name" label="Name" placeholder="Enter your name" />
							<FormInput name="headline" label="Title" placeholder="Enter review title" />
							<FormInput name="email" label="Email" placeholder="Enter your email" />
							<div className="grid gap-2">
								<Label htmlFor="rating">Rating</Label>
								<div className="flex items-center gap-2">
									{[1, 2, 3, 4, 5].map((star) => (
										<StarIcon
											key={star}
											className={`h-5 w-5 ${star <= rating ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
											onClick={() => setRating(star)}
										/>
									))}
								</div>
							</div>
							<FormTextarea name="content" label="Review" placeholder="Write your review" />
						</div>
						<CardFooter>
							<Button type="submit" disabled={isPending}>
								Submit Review
							</Button>
						</CardFooter>
					</form>
				</FormProvider>
			</CardContent>
		</Card>
	);
};

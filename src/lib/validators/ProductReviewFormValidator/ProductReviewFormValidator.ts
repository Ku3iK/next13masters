import { z } from "zod";

export const addReviewFormSchema = z.object({
	name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
	headline: z.string().min(3, { message: "Title must be at least 3 characters long" }),
	email: z.string().email({ message: "Please enter a valid email address" }),
	content: z.string().min(25, { message: "Review content must be at least 25 characters long" }),
	rating: z
		.number()
		.min(1, { message: "Rating is required" })
		.max(5, { message: "Rating must be between 1 and 5" }),
});

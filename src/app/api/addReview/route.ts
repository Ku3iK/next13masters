import { type NextRequest, NextResponse } from "next/server";
import { type ZodIssue } from "zod";
import { addReviewToProduct } from "@/services/api/reviews/addReviewToProduct";
import { type AddReviewToProductParams } from "@/services/api/reviews/addReviewToProduct/types";
import { type ApiResponse } from "@/services/types";
import { addReviewFormSchema } from "@/lib/validators/ProductReviewFormValidator/ProductReviewFormValidator";

export async function POST(req: NextRequest) {
	"use server";

	try {
		const params = (await req.json()) as AddReviewToProductParams;

		const validation = addReviewFormSchema.safeParse(params);

		if (!validation.success) {
			const response: ApiResponse<null, ZodIssue[]> = {
				data: null,
				error: validation.error.errors,
			};
			return NextResponse.json(response, { status: 400 });
		}

		const reviewId = await addReviewToProduct(params);

		const response: ApiResponse<{ reviewId: string }, null> = {
			data: { reviewId: reviewId ?? "" },
			error: null,
		};

		return NextResponse.json(response, { status: 200 });
	} catch (error) {
		console.error("Error in addReviewToProduct:", error);

		const response: ApiResponse<null, string> = {
			data: null,
			error: "An error occurred while adding the review",
		};

		return NextResponse.json(response, { status: 500 });
	}
}

import { type NextRequest, NextResponse } from "next/server";
import { addReviewToProduct } from "@/services/api/reviews/addReviewToProduct";
import { type AddReviewToProductParams } from "@/services/api/reviews/addReviewToProduct/types";
import { type ApiResponse } from "@/services/types";

export async function POST(req: NextRequest) {
	"use server";

	const params = (await req.json()) as AddReviewToProductParams;

	try {
		const reviewId = await addReviewToProduct(params);

		const response: ApiResponse<{ reviewId: string }> = {
			data: { reviewId: reviewId ?? "" },
			error: null,
		};

		return NextResponse.json(response, { status: 200 });
	} catch (error) {
		console.error("Error in addReviewToProduct:", error);

		const response: ApiResponse<null> = {
			data: null,
			error: "An error occurred while adding the review",
		};

		return NextResponse.json(response, { status: 500 });
	}
}

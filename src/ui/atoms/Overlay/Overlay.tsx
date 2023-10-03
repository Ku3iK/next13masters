"use client";

import { useRouter } from "next/navigation";

export function Overlay() {
	const router = useRouter();

	return (
		<button
			onClick={() => router.back()}
			className="fixed inset-0 z-40 bg-slate-800 bg-opacity-75"
		></button>
	);
}

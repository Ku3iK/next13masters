"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, useState, useEffect } from "react";

type SortOption = {
	value: string;
	label: string;
	testId?: string;
};

const sortingOptions: SortOption[] = [
	{ value: "createdAt_ASC", label: "Domyślne sortowanie" },
	{ value: "price_ASC", label: "Cena od najniższej", testId: "sort-by-price" },
	{ value: "price_DESC", label: "Cena od najwyższej" },
	{ value: "rating", label: "Oceny od najwyższych", testId: "sort-by-rating" },
];

export const ProductsSorting = () => {
	const router = useRouter();
	const sortBy = useSearchParams().get("sortBy");
	const [selectedSort, setSelectedSort] = useState(sortBy || "");

	const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
		if (!event.target) return;

		if (event.target.value) setSelectedSort(event.target.value);
	};

	useEffect(() => {
		router.push(`?sortBy=${selectedSort}`);
	}, [selectedSort, router]);

	return (
		<form className="my-10">
			<select value={selectedSort} onChange={(e) => handleSortChange(e)}>
				{sortingOptions.map((option: SortOption) => (
					<option
						key={option.value}
						value={option.value}
						data-testid={option.testId}
						hidden={selectedSort === option.value}
					>
						{option.label}
					</option>
				))}
			</select>
		</form>
	);
};

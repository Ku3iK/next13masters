"use client";
import { useDebounce } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import { type ChangeEvent, useEffect, useState } from "react";
import { Input } from "@/ui/atoms/Input/Input";

export const SearchEngine = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};
	const router = useRouter();

	useEffect(() => {
		if (debouncedSearchTerm) {
			router.push(`/search?query=${debouncedSearchTerm}`);
		}
	}, [debouncedSearchTerm, router]);

	return <Input placeholder="search" type="search" onChange={handleChange} />;
};

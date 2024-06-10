"use client";

import { useState, useCallback, memo } from "react";
import { SearchIcon } from "lucide-react";
import { CommandDialog, CommandEmpty, CommandInput, CommandList } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { useDebouncedSearch } from "@/hooks/useDebouncedSearch";
import { useProductsSearchQuery } from "@/services/queries/hooks/useProductsSearchQuery";

const SEARCH_ENGINE_TEXT = "Type a search...";

const SearchEngineComponent = () => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const debouncedSearchTerm = useDebouncedSearch(searchTerm, 300);

	const handleKeyDown = useCallback((e: KeyboardEvent) => {
		const isSearchShortcutPressed = e.key === "k" && (e.metaKey || e.ctrlKey);
		if (isSearchShortcutPressed) {
			e.preventDefault();
			setIsOpen((prevOpen) => !prevOpen);
		}
	}, []);

	useKeyboardShortcut(handleKeyDown);

	const {
		data: products,
		isLoading,
		isError,
		error,
	} = useProductsSearchQuery(
		{ name: debouncedSearchTerm, limit: 10 },
		{ enabled: !!debouncedSearchTerm },
	);

	console.log({ products, isError, isLoading });

	return (
		<>
			<Button variant={"ghost"} size={"icon"} color={"primary"} onClick={() => setIsOpen(true)}>
				<SearchIcon />
				<span className="sr-only">{SEARCH_ENGINE_TEXT}</span>
			</Button>
			<CommandDialog open={isOpen} onOpenChange={setIsOpen}>
				<CommandInput
					placeholder={SEARCH_ENGINE_TEXT}
					value={searchTerm}
					onValueChange={setSearchTerm}
				/>
				<CommandList>
					{isLoading && <CommandEmpty>Loading...</CommandEmpty>}
					{isError && <CommandEmpty>Error loading results: {error.message}</CommandEmpty>}
					{!isLoading && !isError && !!products && (
						<ul>
							{products.map(({ id, name }) => (
								<li key={`product-${name}-${id}`}>{name}</li>
							))}
						</ul>
					)}
				</CommandList>
			</CommandDialog>
		</>
	);
};

export const SearchEngine = memo(SearchEngineComponent);

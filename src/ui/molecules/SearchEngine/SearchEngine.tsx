"use client";

import { useState, useCallback, memo } from "react";
import { SearchIcon } from "lucide-react";
import NextLink from "next/link";
import { CommandDialog, CommandEmpty, CommandInput, CommandList } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { useProductsSearchQuery } from "@/services/queries/hooks/useProductsSearchQuery";
import { routes } from "@/routes";
import { SearchEngineProductResult } from "@/ui/molecules/SearchEngine/partials/SearchEngineProductResult";
import { useDebounce } from "@/hooks/useDebounce";
import { DialogTitle } from "@/components/ui/dialog";

const SEARCH_ENGINE_TEXT = "Type a search...";

const SearchEngineComponent = () => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const debouncedSearchTerm = useDebounce(searchTerm, 300);

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

	const renderContent = () => {
		if (isLoading) {
			return <CommandEmpty>Loading...</CommandEmpty>;
		}

		if (isError) {
			return <CommandEmpty>Error loading results: {error.message}</CommandEmpty>;
		}

		if (products?.length === 0) {
			return <CommandEmpty>No results for: {debouncedSearchTerm}</CommandEmpty>;
		}

		if (!!products?.length) {
			return (
				<div className={"flex flex-col gap-4 p-3"}>
					<ul className={"flex flex-col gap-3"} data-testid="search-results">
						{products.map((product) => {
							const { name, id } = product;

							return (
								<li key={`product-${name}-${id}`}>
									<SearchEngineProductResult {...product} />
								</li>
							);
						})}
					</ul>
					<Button asChild className={"w-full"} data-testid="search-results-see-all">
						<NextLink href={routes.search.url({ query: debouncedSearchTerm })}>
							See all results
						</NextLink>
					</Button>
				</div>
			);
		}

		return null;
	};

	return (
		<>
			<Button
				variant={"ghost"}
				size={"icon"}
				color={"primary"}
				onClick={() => setIsOpen(true)}
				data-testid="search-button"
			>
				<SearchIcon />
				<span className="sr-only">{SEARCH_ENGINE_TEXT}</span>
			</Button>
			<CommandDialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogTitle asChild>
					<h2 className={"sr-only"}>Search</h2>
				</DialogTitle>
				<CommandInput
					placeholder={SEARCH_ENGINE_TEXT}
					value={searchTerm}
					onValueChange={setSearchTerm}
					data-testid="search-engine-input"
				/>
				<CommandList>{renderContent()}</CommandList>
			</CommandDialog>
		</>
	);
};

export const SearchEngine = memo(SearchEngineComponent);

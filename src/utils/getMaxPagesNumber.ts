export const getMaxPages = (allItems: number, productsPerPage: number) => {
	return Math.ceil(allItems / productsPerPage);
};

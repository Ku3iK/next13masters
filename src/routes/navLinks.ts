import { routes } from "@/routes/routes";

export const getNavLinks = () => [
	{ label: "Home", href: routes.homepage.url(), exact: true },
	{ label: "All", href: routes.products.url() },
	{ label: "T-shirts", href: routes.categories.url({ category: "t-shirts" }) },
	{ label: "Hoodies", href: routes.categories.url({ category: "hoodies" }) },
	{ label: "Accessories", href: routes.categories.url({ category: "accessories" }) },
];

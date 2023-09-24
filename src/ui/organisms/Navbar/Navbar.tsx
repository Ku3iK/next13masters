import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

const navLinks = [
	{ label: "Home", href: "/", exact: true },
	{ label: "All", href: "/products" },
	{ label: "T-shirts", href: "/categories/t-shirts" },
	{ label: "Hoodies", href: "/categories/hoodies" },
	{ label: "Accessories", href: "/categories/accessories" },
];

export async function Navbar() {
	return (
		<nav>
			<ul className="mt-2 flex justify-center space-x-4">
				{navLinks.map((link) => (
					<li key={link.href}>
						<ActiveLink href={link.href as Route} exact={link.exact}>
							{link.label}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

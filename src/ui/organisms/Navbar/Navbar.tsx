import { type Route } from "next";
import { BadgeDollarSign } from "lucide-react";
import Link from "next/link";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";
import { SearchEngine } from "@/ui/molecules/SearchEngine/SearchEngine";

const navLinks = [
	{ label: "Home", href: "/", exact: true },
	{ label: "All", href: "/products" },
	{ label: "T-shirts", href: "/categories/t-shirts" },
	{ label: "Hoodies", href: "/categories/hoodies" },
	{ label: "Accessories", href: "/categories/accessories" },
];

export async function Navbar() {
	return (
		<header className="container mx-auto flex max-w-md items-center justify-between gap-6 p-12 py-6 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<Link href={"/"} className="flex items-center gap-3">
				<BadgeDollarSign width={64} height={64} />
				<p>Next13Masters Shop</p>
			</Link>
			<SearchEngine />
			<nav>
				<ul className="flex justify-center space-x-4">
					{navLinks.map((link) => (
						<li key={link.href}>
							<ActiveLink href={link.href as Route} exact={link.exact}>
								{link.label}
							</ActiveLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

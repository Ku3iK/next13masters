import { type Route } from "next";
import { BadgeDollarSign, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";
import { SearchEngine } from "@/ui/molecules/SearchEngine/SearchEngine";
import { getCartFromCookies } from "@/api/cart/cart";

const navLinks = [
	{ label: "Home", href: "/", exact: true },
	{ label: "All", href: "/products" },
	{ label: "T-shirts", href: "/categories/t-shirts" },
	{ label: "Hoodies", href: "/categories/hoodies" },
	{ label: "Accessories", href: "/categories/accessories" },
];

export async function Navbar() {
	const cart = await getCartFromCookies();

	const quantity = cart?.orderItems.length ?? 0;

	return (
		<header className="container mx-auto flex max-w-md items-center justify-between gap-6 p-12 py-6 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<Link href={"/"} className="flex items-center gap-3">
				<BadgeDollarSign width={64} height={64} />
				<p>Next13Masters Shop</p>
			</Link>
			<SearchEngine />
			<div className="flex items-center gap-4">
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
				<Link href={"/cart"} className="group -m-2 flex items-center p-2">
					<ShoppingCart
						width={20}
						height={20}
						className="h-6 w-6 flex-shrink-0"
						aria-hidden="true"
					/>
					<span className="ml-2 text-sm font-medium">{quantity}</span>
					<span className="sr-only">Items in cart, view bag</span>
				</Link>
			</div>
		</header>
	);
}

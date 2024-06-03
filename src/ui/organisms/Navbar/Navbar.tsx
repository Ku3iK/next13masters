import { type Route } from "next";
import { BadgeDollarSign, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";
import { SearchEngine } from "@/ui/molecules/SearchEngine/SearchEngine";
import { getCartFromCookies } from "@/api/cart/cart";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/components/icons/MenuIcon";

const navLinks = [
	{ label: "Home", href: "/", exact: true },
	{ label: "All", href: "/products" },
	{ label: "T-shirts", href: "/categories/t-shirts" },
	{ label: "Hoodies", href: "/categories/hoodies" },
	{ label: "Accessories", href: "/categories/accessories" },
];

const NavbarContent = () => {
	return (
		<nav>
			<ul className="flex flex-col justify-center space-x-4 lg:flex-row">
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
};

export async function Navbar() {
	const cart = await getCartFromCookies();

	const quantity = cart?.orderItems.length ?? 0;

	return (
		<header className="container mx-auto flex max-w-md items-center justify-between gap-6 p-2 py-6 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl lg:p-12">
			<Link href={"/"} className="flex items-center gap-3">
				<BadgeDollarSign width={64} height={64} />
				<p>Next13Masters Shop</p>
			</Link>
			<SearchEngine />
			<div className="flex items-center gap-4">
				<div className="hidden lg:block">
					<NavbarContent />
				</div>
				<Sheet>
					<SheetTrigger asChild>
						<Button className="md:hidden" size="icon" variant="outline">
							<MenuIcon />
							<span className="sr-only">Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left">
						<div className="flex flex-col items-start gap-3 p-4">
							<NavbarContent />
						</div>
					</SheetContent>
				</Sheet>
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

import { type Route } from "next";
import { ShoppingCart } from "lucide-react";
import NextLink from "next/link";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";
import { SearchEngine } from "@/ui/molecules/SearchEngine/SearchEngine";
import { getCartFromCookies } from "@/api/cart/cart";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { Logotype } from "@/components/views/Logotype";
import { routes } from "@/routes/routes";

const navLinks = [
	{ label: "Home", href: "/", exact: true },
	{ label: "All", href: "/products" },
	{ label: "T-shirts", href: "/categories/t-shirts" },
	{ label: "Hoodies", href: "/categories/hoodies" },
	{ label: "Accessories", href: "/categories/accessories" },
];

const NavbarContent = () => {
	return (
		<ul className="flex flex-col justify-center space-x-4 lg:flex-row">
			{navLinks.map((link) => (
				<li key={link.href}>
					<ActiveLink href={link.href as Route} exact={link.exact}>
						{link.label}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};

export async function Navbar() {
	const cart = await getCartFromCookies();

	const quantity = cart?.orderItems.length ?? 0;

	return (
		<header className={"fixed top-0 z-50 w-full border-b bg-white/60 py-2 backdrop-blur-sm"}>
			<nav className={"container flex flex-row justify-between"}>
				<Logotype />
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
					<NextLink href={routes.cart.url()} className="group -m-2 flex items-center p-2">
						<ShoppingCart
							width={20}
							height={20}
							className="h-6 w-6 flex-shrink-0"
							aria-hidden="true"
						/>
						<span className="ml-2 text-sm font-medium">{quantity}</span>
						<span className="sr-only">Items in cart, view bag</span>
					</NextLink>
					<SearchEngine />
				</div>
			</nav>
		</header>
	);
}

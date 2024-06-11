import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";
import { SearchEngine } from "@/ui/molecules/SearchEngine/SearchEngine";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { Logotype } from "@/components/views/Logotype";
import { ShoppingCartButton } from "@/components/views/ShoppingCartButton";
import { getNavLinks } from "@/routes/navLinks";

const NavbarContent = () => {
	const navLinks = getNavLinks();

	return (
		<ul className="flex flex-col justify-center gap-2 lg:flex-row lg:gap-4">
			{navLinks.map(({ label, href, exact }) => (
				<li key={href}>
					<ActiveLink href={href} exact={exact}>
						{label}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};

const NavbarToggleButton = () => (
	<Sheet>
		<SheetTrigger asChild>
			<Button className="order-last lg:hidden" size="icon" variant="default">
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
);

export function Navbar() {
	return (
		<header className="fixed top-0 z-50 w-full border-b border-b-gray-300 bg-white/60 py-4 backdrop-blur-sm">
			<nav className="container flex flex-row justify-between">
				<Logotype />
				<div className="flex w-full items-center justify-end gap-1 sm:gap-2 md:gap-4">
					<div className="hidden w-full justify-center lg:flex">
						<NavbarContent />
					</div>
					<NavbarToggleButton />
					<ShoppingCartButton />
					<SearchEngine />
				</div>
			</nav>
		</header>
	);
}

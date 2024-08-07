import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/providers/Providers";
import { Navbar } from "@/components/views/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Accessories",
	description: "Next13Masters - kurs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<Providers>
					<Navbar />
					<main className="mx-auto my-12 max-w-md p-4 sm:max-w-2xl sm:py-16 md:my-16 md:max-w-4xl lg:max-w-7xl">
						{children}
					</main>
					<footer>
						<p className="text-center text-sm text-gray-500">© 2023</p>
					</footer>
				</Providers>
			</body>
		</html>
	);
}

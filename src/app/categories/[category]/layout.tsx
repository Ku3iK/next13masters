import { type ReactNode } from "react";

export const generateStaticParams = async () => {
	return [{ category: "t-shirts" }, { category: "hoodies" }, { category: "accessories" }];
};

export default function CategoryProductLayout({ children }: { children: ReactNode }) {
	return children;
}

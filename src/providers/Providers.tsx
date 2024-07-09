"use client";

import { type PropsWithChildren } from "react";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { SnackBarProvider } from "@/providers/SnackBarProvider";

export const Providers = ({ children }: PropsWithChildren) => {
	return (
		<ReactQueryProvider>
			<SnackBarProvider>{children}</SnackBarProvider>
		</ReactQueryProvider>
	);
};

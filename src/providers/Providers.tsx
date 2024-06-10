"use client";

import { type PropsWithChildren } from "react";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

export const Providers = ({ children }: PropsWithChildren) => {
	return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

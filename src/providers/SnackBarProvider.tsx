"use client";

import { SnackbarProvider } from "notistack";

import React, { type PropsWithChildren } from "react";

export const SnackBarProvider = ({ children }: PropsWithChildren) => {
	return (
		<SnackbarProvider
			maxSnack={3}
			autoHideDuration={15000}
			anchorOrigin={{
				horizontal: "right",
				vertical: "top",
			}}
		>
			{children}
		</SnackbarProvider>
	);
};

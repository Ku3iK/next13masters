import { type UseQueryOptions, type UseMutationOptions } from "@tanstack/react-query";

export type GenericUseQueryOptions<TData> = Omit<UseQueryOptions<TData, Error>, "queryKey">;

export type GenericUseMutationOptions<TData, TVariables> = Omit<
	UseMutationOptions<TData, Error, TVariables, unknown>,
	"mutationFn"
>;

export interface ApiResponse<T> {
	data: T | null;
	error: string | null;
}

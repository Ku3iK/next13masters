import { type UseQueryOptions } from "@tanstack/react-query";

export type GenericUseQueryOptions<TData> = Omit<UseQueryOptions<TData, Error>, "queryKey">;

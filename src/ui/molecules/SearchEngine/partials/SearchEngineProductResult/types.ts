import { type ProductsGetByNameQuery } from "@/gql/graphql";

type Product = ProductsGetByNameQuery["products"][0];

export type SearchEngineProductResultProps = Pick<Product, "id" | "images" | "name" | "price">;

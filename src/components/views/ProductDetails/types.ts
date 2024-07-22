import { type Category, type Product } from "@/gql/graphql";

type ProductProps = Pick<Product, "id" | "name" | "description" | "price" | "inStock">;

type CategoryProps = {
	category?: Category["name"];
};

export type ProductDetailsProps = ProductProps & CategoryProps;

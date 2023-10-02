/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoryGetTotalProductsNumber {\n  productsConnection(where: {categories_every: {slug: \"hoodies\"}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.CategoryGetTotalProductsNumberDocument,
    "fragment CollectionListItem on Collection {\n  id\n  name\n  slug\n  image {\n    url\n  }\n}": types.CollectionListItemFragmentDoc,
    "query CollectionsGetList {\n  collections {\n    ...CollectionListItem\n  }\n}": types.CollectionsGetListDocument,
    "query CollectionsGetSlugs {\n  collections(first: 3) {\n    id\n    slug\n  }\n}": types.CollectionsGetSlugsDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    name\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCategorySlugPerPage($categorySlug: String!, $first: Int!, $skip: Int) {\n  categories(where: {slug: $categorySlug}) {\n    name\n    products(first: $first, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugPerPageDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    name\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetList {\n  products(first: 10) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListWithPages($first: Int!, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListWithPagesDocument,
    "query ProductsGetSuggestedByNewest {\n  products(first: 5) {\n    ...ProductListItem\n  }\n}": types.ProductsGetSuggestedByNewestDocument,
    "query ProductsGetTotalNumber {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetTotalNumberDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetTotalProductsNumber {\n  productsConnection(where: {categories_every: {slug: \"hoodies\"}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').CategoryGetTotalProductsNumberDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  id\n  name\n  slug\n  image {\n    url\n  }\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    ...CollectionListItem\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetSlugs {\n  collections(first: 3) {\n    id\n    slug\n  }\n}"): typeof import('./graphql').CollectionsGetSlugsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    name\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlugPerPage($categorySlug: String!, $first: Int!, $skip: Int) {\n  categories(where: {slug: $categorySlug}) {\n    name\n    products(first: $first, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugPerPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    name\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products(first: 10) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListWithPages($first: Int!, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListWithPagesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSuggestedByNewest {\n  products(first: 5) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetSuggestedByNewestDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetTotalNumber {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetTotalNumberDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

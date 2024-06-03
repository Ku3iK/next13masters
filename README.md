# About procject

Application that was created for purpose of understaing and testing the new possibilites provided by Next.js App router. Of cource, other technologies were also used/tested. They are all described. The app router was the main idea of this project, but many other interesting technologies were also used in addition, such as CodeGen, the whole stack is listed in the #Stack section. Current stage of the project is MVP, which didn't focus on the UI or delivering an already perfect store. At this point the main idea was to use all (or most) of the interesting functionalities.

## Getting Started

```bash
pnpm i
pnpm dev
```

## Stack

- [Next.js](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/)
- [GraphQl CodeGen](https://github.com/dotansimha/graphql-code-generator#readme)
- [Tailwind](https://tailwindcss.com/)
- [Hygraph](https://hygraph.com/)
- [Playwright](https://playwright.dev/)
- [Jest](https://jestjs.io/)

## ENV

copy `.env.sample` and `.env.local.sample` files and add values to the `ENV variables` already created in them.

```
GRAPHQL_URL= // GraphQL server URL
HYGRAPH_MUTATION_TOKEN= // Token to add access for mutation endpoint
```

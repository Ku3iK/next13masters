import { expect, type Page } from "@playwright/test";

export async function openRandomProductPage({ page }: { page: Page }) {
	await page.goto(`/products`);
	const list = page.getByTestId("products-list");
	const productLink = list.locator("li a");
	await productLink.first().waitFor();
	const count = await productLink.count();
	const randomProductLink = productLink.nth(Math.floor(Math.random() * count));
	await randomProductLink.waitFor();
	await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);
	await expect(async () => {
		await randomProductLink.click();
		await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);
		await page.waitForURL("**/product/**", { timeout: 300 });
		await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);
	}).toPass();
}

export async function getProductPrices({ page }: { page: Page }) {
	const productPrices = page.getByTestId("products-list").getByTestId("product-price");
	await productPrices.first().waitFor();
	const count = await productPrices.count();
	expect(count).toBeGreaterThan(0);
	return (await Promise.all((await productPrices.all()).map((e) => e.textContent()))).map((el) =>
		Number.parseFloat((el || "")?.replace("$", "").replace(",", ".").trim()),
	);
}
export async function getProductRatings({ page }: { page: Page }) {
	const productRatings = page.getByTestId("products-list").getByTestId("product-rating");
	if ((await productRatings.count()) === 0) {
		return [];
	}

	await productRatings.first().waitFor();
	return (await Promise.all((await productRatings.all()).map((e) => e.textContent()))).map((el) =>
		Number.parseFloat((el || "")?.replace(",", ".").trim()),
	);
}

export function isNonDecresing(arr: number[]): boolean {
	for (let i = 1; i < arr.length; ++i) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		if (arr[i] < arr[i - 1]) {
			return false;
		}
	}
	return true;
}
export function isNonIncreasing(arr: number[]): boolean {
	for (let i = 1; i < arr.length; ++i) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		if (arr[i] > arr[i - 1]) {
			return false;
		}
	}
	return true;
}

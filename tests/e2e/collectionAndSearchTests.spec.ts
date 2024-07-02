import { test, expect } from "@playwright/test";
import { openRandomProductPage } from "./utils";

test.describe("Collection and Search Tests", () => {
	test(`1. single product page implemented`, async ({ page }) => {
		await openRandomProductPage({ page });

		const title = await page.locator("h1").textContent();
		expect(await page.title()).toContain(title);
	});

	test(`2. search`, async ({ page }) => {
		await openRandomProductPage({ page });
		const productName = await page.locator("h1").textContent();
		expect(productName).toBeTruthy();

		await page.goto("/");

		const searchButton = page.getByTestId("search-button");
		await searchButton.click();

		const searchInput = page.getByTestId("search-input");
		await searchInput.type(productName!);

		await page.waitForTimeout(300);

		const searchResults = page.getByTestId("search-results");
		await searchResults.waitFor();
		const matchingProducts = searchResults.locator(`li:has-text("${productName}")`);
		const matchingProductsCount = await matchingProducts.count();
		expect(matchingProductsCount).toBeGreaterThan(0);

		const seeAllResultsButton = page.getByTestId("search-results-see-all");
		await seeAllResultsButton.click();

		await page.waitForURL(`**/search?query=${encodeURIComponent(productName!)}`);
		await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);

		const resultsPageList = page.getByTestId("products-list");
		await resultsPageList.waitFor();
		const resultsPageProductLink = resultsPageList.locator(`li:has-text("${productName}")`);
		const resultsPageCount = await resultsPageProductLink.count();
		expect(resultsPageCount).toBeGreaterThan(0);
	});

	test(`3. categories pagination`, async ({ page }) => {
		await page.goto(`/`);

		const nav = page.getByRole("navigation").first();

		const links = await nav.locator('a[href*="/categories/"]').all();

		expect(links.length).toBeGreaterThan(0);

		const categoryLink = links[0];

		expect(categoryLink).toBeDefined();

		await categoryLink?.click();
		await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);
		await page.waitForURL(/\/categories\//);
		await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);

		const list = page.getByTestId("products-list");
		const productLink = list.locator("li a");
		await productLink.first().waitFor();
		const productsCount = await productLink.count();
		expect(productsCount).toBeGreaterThan(0);

		expect(page.url()).toMatch(/\/categories\/.*\/\d+$/);

		const paginationLinks = page.getByLabel(/pagination/i).getByRole("link");
		await paginationLinks.first().waitFor();
		const paginationCount = await paginationLinks.count();
		expect(paginationCount).toBeGreaterThan(0);
	});

	test(`4. active links for partial matches`, async ({ page }) => {
		await page.goto(`/`);

		const nav = page.getByRole("navigation").first();

		const links = await nav.locator('a[href*="/categories/"]').all();

		expect(links.length).toBeGreaterThan(0);

		const categoryLink = links[0];
		const categoryName = await categoryLink?.textContent();

		expect(categoryLink).toBeDefined();
		const inactiveAriaCurrent = await categoryLink?.getAttribute("aria-current");
		expect(inactiveAriaCurrent).toBeNull();

		await categoryLink?.click();
		await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);

		await page.waitForURL(/\/categories\//);
		await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);

		const list = page.getByTestId("products-list");
		const productLink = list.locator("li a");
		await productLink.first().waitFor();

		const title = await page.locator("h1,h2").first().textContent();
		expect(title?.toLowerCase()).toContain(categoryName?.toLowerCase());

		const activeLink = nav.locator(`a[href*="/categories/"][aria-current="page"]`).first();
		const activeAriaCurrent = await activeLink.getAttribute("aria-current");
		expect(activeAriaCurrent).toBe("page");

		expect(page.url()).toMatch(/\/categories\/.*\/\d+$/);
	});

	test(`5. collections`, async ({ page }) => {
		await page.goto(`/`);

		const links = page.locator('[href*="/collections/"]');
		await links.first().waitFor();
		const linksCount = await links.count();
		expect(linksCount).toBeGreaterThan(0);

		const randomLink = links.nth(Math.floor(Math.random() * linksCount));
		const collectionName = await randomLink.textContent();
		await randomLink.click();

		expect(collectionName).toBeTruthy();
		await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);
		await page.waitForURL("**/collections/**");
		await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);

		const title = page.getByRole("heading", { name: collectionName! });
		await title.waitFor();
		expect(await page.title()).toContain(collectionName);
	});

	test(`6. related products`, async ({ page }) => {
		await openRandomProductPage({ page });

		const relatedProducts = page.getByTestId("related-products");
		await relatedProducts.waitFor();
		await relatedProducts.locator("li a").first().waitFor();
		const relatedProductsCount = await relatedProducts.locator("li a").count();
		expect(relatedProductsCount).toBeGreaterThan(0);
	});

	test(`7. delayed search`, async ({ page }) => {
		await openRandomProductPage({ page });
		const productName = await page.locator("h1").textContent();
		expect(productName).toBeTruthy();

		await page.goto("/");

		const searchButton = page.getByTestId("search-button");
		await searchButton.click();

		const searchInput = page.getByTestId("search-input");
		await searchInput.type(productName!, { delay: 166 });

		// Listen for network requests
		const requests: string[] = [];
		page.on("request", (request) => {
			if (request.url().includes("/search?query=")) {
				requests.push(request.url());
			}
		});

		await page.waitForTimeout(300);

		const searchResults = page.getByTestId("search-results");
		await searchResults.waitFor();
		const matchingProducts = searchResults.locator(`li:has-text("${productName}")`);
		const matchingProductsCount = await matchingProducts.count();
		expect(matchingProductsCount).toBeGreaterThan(0);

		const seeAllResultsButton = page.getByTestId("search-results-see-all");
		await seeAllResultsButton.click();

		await page.waitForURL(`**/search?query=${encodeURIComponent(productName!)}`);
		await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);

		const resultsPageList = page.getByTestId("products-list");
		await resultsPageList.waitFor();
		const resultsPageProductLink = resultsPageList.locator(`li:has-text("${productName}")`);
		const resultsPageCount = await resultsPageProductLink.count();
		expect(resultsPageCount).toBeGreaterThan(0);

		const uniqueQueries = new Set(requests.map((url) => new URL(url).searchParams.get("query")));
		expect(uniqueQueries.size).toBe(1);
	});

	test(`8. keyboard shortcut to open search engine`, async ({ page }) => {
		await page.goto("/");

		await page.evaluate(() => {
			document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }));
		});

		const searchInput = page.getByTestId("search-input");
		await expect(searchInput).toBeVisible({ timeout: 10000 });

		await page.keyboard.press("Escape");

		await page.evaluate(() => {
			document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
		});

		await expect(searchInput).toBeVisible({ timeout: 10000 });

		await page.keyboard.press("Escape");
	});
});

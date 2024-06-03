import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-member-access
require("dotenv").config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
// eslint-disable-next-line import/no-default-export
export default defineConfig({
	testDir: "./.",
	fullyParallel: false,
	workers: 1,
	reporter: [["line"], ["json", { outputFile: "test-results.json" }]],
	timeout: 10000,
	use: {
		baseURL: process.env.BASE_URL,
		trace: "on-first-retry",
	},

	projects: [
		{
			name: "Chromium",
			use: { ...devices["Desktop Chrome"], channel: "chromium" },
		},
	],
});

import { test, expect } from "@playwright/test";

const customerValues = [
  { name: "lewis", trollies: "3", other: "2 cages" },
  { name: "john", trollies: "2", other: "5 pallets" },
  { name: "jane", trollies: "5", other: "" },
  { name: "phil", trollies: "2", other: "Lots of loose" },
];

// Opens the page and inputs the base values
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Add Customer" }).click();
  for (const customer of customerValues) {
    await page.getByPlaceholder("Landscapers").fill(customer.name);
    await page.getByPlaceholder("4T").fill(customer.trollies);
    await page.getByPlaceholder("Comp").fill(customer.other);
    await page.getByRole("button", { name: "create" }).click();
  }
  await page.getByRole("button", { name: "Add Customer" }).click();
  await expect(page.locator("#content")).toContainText("Total Trolleys- 12");
});

test.describe("Testing Customer section", () => {
  test("Test Removal of items from the list", async ({ page }) => {
    await page
      .getByRole("button", { name: "X 3 - Jane 5T" })
      .getByRole("button")
      .click();
    await expect(page.locator("#content")).toContainText("Total Trolleys- 7");
  });

  test("Trolley Mapper Title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Trolley Mapper/);
  });
});

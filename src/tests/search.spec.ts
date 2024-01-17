import { test, expect, Page } from "playwright/test"
import { BrowserWrapper } from "../infra/browser-wrapper"
import { SearchPage } from "../logic/search-page"
import { HomePage } from "../logic/home-page"
import config from "../../config.json"

test.describe("Search about specific brand and verify results", () => {
  let page: Page
  let browser: BrowserWrapper
  let searchpage: SearchPage

  test.beforeAll(async () => {
    browser = new BrowserWrapper()
  });

  test.beforeEach(async () => {
    page = await browser.getPage(config.Pages_url.BASE_URL)
    const homepage = new HomePage(page)
    await homepage.clicOnSearchHeaderBtn()
    await homepage.fillSearchInputHeader("adidas")
    searchpage = new SearchPage(page)
  });

  test("Search about a brand and sort the result from chipper to the expensive and validate the sort", async () => {
    await searchpage.choosePriceSortOption('מחיר: מהנמוך לגבוה')
    await page.waitForLoadState('networkidle')
    const prices = await searchpage.getFinalPricesList()
    expect(searchpage.isSorted(prices)).toBeTruthy()
  });

  test("Search about a brand and validate item brand name by pickking a random item from the search result", async () => {
    expect(await searchpage.getRandomItemBrand()).toContain("ADIDAS")
  });

  test("Search about a brand and validate the result title text", async () => {
    expect(await searchpage.isResultTitleContainBrandName("ADIDAS")).toBeTruthy()
  });

});

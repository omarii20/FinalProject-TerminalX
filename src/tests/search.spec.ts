import { test, expect, Page } from "playwright/test";
import { BrowserWrapper } from "../infra/browser-wrapper";
// import config from "../../config.json";
import { SearchPage } from "../logic/search-page";
import { HomePage } from "../logic/home-page";

test.describe("search about item verify results", () => {
  let page: Page;
  let browser: BrowserWrapper;
  let searchpage: SearchPage;

  test.beforeAll(async () => {
    browser = new BrowserWrapper();
  });

  test.beforeEach(async () => {
    page = await browser.getPage('https://www.terminalx.com/men');
    const homepage = new HomePage(page);
    await homepage.clicOnSearchHeaderBtn();
    await homepage.fillSearchInputHeader("adidas");
    searchpage = new SearchPage(page);
  });

  test("Search about a brand and validate items brand", async () => {
    expect(await searchpage.getRandomItemBrand()).toContain("ADIDAS");
  });

  test("Search about a brand and validate the result title text", async () => {
    expect(await searchpage.isResultTitleContainBrandName("ADIDAS")).toBeTruthy();
  });

  test("Search about brand and sort from chipper to the epensive and validate sort", async () => {
    await searchpage.choosePriceSortOption('מחיר: מהנמוך לגבוה')
    const prices = await searchpage.getFinalPricesList()
    // console.log("Sorted Prices is:", prices)
    expect(searchpage.isSorted(prices)).toBeTruthy()
  });
});

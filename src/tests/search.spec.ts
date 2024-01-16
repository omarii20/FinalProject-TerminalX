import { test, expect, Page } from "playwright/test";
import { BrowserWrapper } from "../infra/browser-wrapper";
import config from "../../config.json";
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
    page = await browser.getPage(config.baseUrl);
    const homepage = new HomePage(page);
    await homepage.clicOnSearchHeaderBtn();
    await homepage.fillSearchInputHeader("adidas");
    searchpage = new SearchPage(page);
  });

  test("Search about a brand and validate items brand", async () => {
    expect(await searchpage.getRandomItemBrand()).toContain("ADIDAS");
  });

  test("Search about a brand and validate the result title text", async () => {
    expect(
      await searchpage.isResultTitleContainBrandName("ADIDAS")
    ).toBeTruthy();
  });
});

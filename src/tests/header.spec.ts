import { test, expect, Page } from "playwright/test";
import { BrowserWrapper } from "../infra/browser-wrapper";
import config from "../../config.json";
import { HomePage } from "../logic/home-page";

test.describe("search about item verify results", () => {
  let page: Page;
  let browser: BrowserWrapper;
  let homepage: HomePage

  test.beforeAll(async () => {
    browser = new BrowserWrapper();
  });

  test.beforeEach(async () => {
    page = await browser.getPage(config.baseUrl);
    homepage = new HomePage(page);
  });

  const header = [
    { name: "ON SALE", url: config.pagesURLs.on_sale_page },
    { name: "JUST LANDED", url: config.pagesURLs.just_landed_page },
    { name: "BRANDS", url: config.pagesURLs.BRANDS }
  ]
for (const btn of header) {
    test(`Go to Home Page, Click on: ${btn.name}, Validate url`, async () => {
        switch (btn.name) {
            case 'JUST LANDED':
                await homepage.clickOnJustLandedFromHeader()
                break;
            case 'ON SALE':
                await homepage.clickOnOnSaleBtnFromHeader()
                break;
            case 'BRANDS':
                await homepage.clickOnMutagimFromHeader()
                break;
            default:
                console.error("Illegal Input!");
                break;
        }
        await expect(await browser.getCurrentPage()).toHaveURL(btn.url);
    });
}

});
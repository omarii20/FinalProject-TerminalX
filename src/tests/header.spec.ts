import { test, expect, Page } from "playwright/test"
import { BrowserWrapper } from "../infra/browser-wrapper"
import config from "../../config.json"
import { HomePage } from "../logic/home-page"

test.describe("search about item verify results", () => {
  let page: Page;
  let browser: BrowserWrapper;
  let homepage: HomePage

  test.beforeAll(async () => {
    browser = new BrowserWrapper()
  });

  test.beforeEach(async () => {
    page = await browser.getPage(config.Pages_url.BASE_URL)
    homepage = new HomePage(page)
  })

  const header = [
    { name: "ON SALE", url: config.Pages_url.ON_SALE_URL},
    { name: "JUST LANDED", url: config.Pages_url.jUST_LANDED_URL},
    { name: "BRANDS", url: config.Pages_url.BRANDS_URL}
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
                  console.error("Illegal Input!")
                  break;
          }
          await expect(await browser.getCurrentPage()).toHaveURL(btn.url)
      })
  }

  test.afterEach(async()=>{
    browser.closeBrowser();
  })

})
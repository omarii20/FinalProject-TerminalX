import { test, expect, Page } from "playwright/test";
import { BrowserWrapper } from "../infra/browser-wrapper";
import { HomePage } from "../logic/home-page";
import { userAccount } from "../logic/user-account-page";
import config from "../../config.json";

test.describe("Doing log out and validate that the user isnt connecting", () => {
  let page: Page;
  let browser: BrowserWrapper;
  
  test.beforeAll(async () => {
    browser = new BrowserWrapper();
  });

 test.beforeEach(async () => {
    page = await browser.getPage(config.Pages_url.BASE_URL);
});


  test("Click on log out button from the account page and verify loging out by checking the loging btn", async () => {
    test.skip()
    const homepage = new HomePage(page);
    await homepage.clickOnProfileUserBtnFromHeader()
    const useraccount = new userAccount(page)
    await useraccount.clickOnLogOutBtn()
    expect(await homepage.getLoginButtonTextFromHeader()).toContain("התחברות");
  });

});

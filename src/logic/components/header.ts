import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/base-page";
export class Header extends BasePage{

    private connectionButton:Locator;
    private searchBtn:Locator;
    private searchInput:Locator;

    constructor(page: Page) {
        super(page);
        this.connectionButton=this.page.locator('//a[@href="/customer/account/login?r=%2Fcustomer%2Faccount"]')
        this.searchBtn = page.locator('.search-button_1ENs[data-test-id="qa-header-search-button"]')
        this.searchInput = page.locator('[data-test-id="qa-search-box-input"]')
        this.initPage();
    }
    clickOnConnectionBtn = async () => {
        await this.connectionButton.click();
    }

      async clickOnSearchIcon() {
        await this.searchBtn.click();
      }
      fillInSearchItem = async (searchItem: string) => {
        await this.searchInput.type(searchItem,{delay:100})
        await this.searchInput.press('Enter');
    }
}
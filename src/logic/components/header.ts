import { Locator, Page } from "playwright";
import { BaseComponent } from "./base-component";

export class Header extends BaseComponent {
  
  private connectionButton: Locator;
  private searchBtn: Locator;
  private searchInput: Locator;
  private onSaleBtn: Locator
  private justLanded: Locator
  private mutagim: Locator

  constructor(page: Page) {
    super(page);
    this.connectionButton = this.page.locator('//a[@href="/customer/account/login?r=%2Fcustomer%2Faccount"]')
    this.searchBtn = page.locator('.search-button_1ENs[data-test-id="qa-header-search-button"]')
    this.searchInput = page.locator('[data-test-id="qa-search-box-input"]')
    this.onSaleBtn = page.locator('//a[text()="ON SALE"]')
    this.justLanded = page.locator('//a[text()="JUST LANDED"]')
    this.mutagim = page.locator('//a[text()="מותגים"]')
    this.initPage();
  }

  clickOnConnectionBtn = async () => {
    await this.connectionButton.click();
  };

  clickOnOnSaleBtn = async () => {
    await this.onSaleBtn.click();
  };

  clickOnJustLanded = async () => {
    await this.justLanded.click();
  };

  clickOnMutagim = async () => {
    await this.mutagim.click();
  };

  clickOnSearchIcon = async () => {
    await this.searchBtn.click();
  };

  fillInSearchItem = async (searchItem: string) => {
    await this.searchInput.type(searchItem, { delay: 100 });
    await this.searchInput.press("Enter");
  };

}

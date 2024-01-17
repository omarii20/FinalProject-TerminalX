import { Locator, Page } from "playwright";
import { BaseComponent } from "./base-component";

export class Header extends BaseComponent {
  
  private connectionButton: Locator;
  private searchBtn: Locator;
  private searchInput: Locator;
  private onSaleBtn: Locator;
  private justLanded: Locator;
  private mutagim: Locator;
  private cartButton: Locator;
  private itemCartLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.connectionButton = this.page.locator('//a[@href="/customer/account/login?r=%2Fcustomer%2Faccount"]')
    this.searchBtn = page.locator('.search-button_1ENs[data-test-id="qa-header-search-button"]')
    this.searchInput = page.locator('[data-test-id="qa-search-box-input"]')
    this.onSaleBtn = page.locator('//a[text()="ON SALE"]')
    this.justLanded = page.locator('//a[text()="JUST LANDED"]')
    this.mutagim = page.locator('//a[text()="מותגים"]')
    this.cartButton = page.locator('//div[@class="cart-and-wishlist_3PHw"]/a[contains(@href,"/checkout/cart")]')
    this.itemCartLocator = this.page.locator('//a[contains(text(), "סל קניות")]');
    this.initPage();
  }

  clickOnCartListBtn = async () => {
    await this.cartButton.click();

    // Wait for the minicart div to be visible
    const minicartDivLocator = this.page.locator('//div[@class="minicart-wrapper_oequ"]');
    await minicartDivLocator.waitFor({ state: 'visible' });

    // Wait for the "סל קניות" button to be visible inside the minicart div
    const cartButtonLocator = this.page.locator('//a[contains(text(), "סל קניות")]');
    await cartButtonLocator.waitFor({ state: 'visible' });

    // Click on the "סל קניות" button
    await cartButtonLocator.click();
  };

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

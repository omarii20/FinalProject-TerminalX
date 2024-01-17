import { Locator, Page } from "playwright"
import { BaseComponent } from "./base-component"

export class Header extends BaseComponent {

  private profileUserBtn: Locator;
  private searchBtn: Locator;
  private searchInput: Locator;
  private onSaleBtn: Locator;
  private justLanded: Locator;
  private mutagim: Locator;
  private cartButton: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.searchBtn = page.locator('[data-test-id="qa-header-search-button"]')
    this.searchInput = page.locator('[data-test-id="qa-search-box-input"]')
    this.onSaleBtn = page.locator('//a[text()="ON SALE"]')
    this.justLanded = page.locator('//a[text()="JUST LANDED"]')
    this.mutagim = page.locator('//a[text()="מותגים"]')
    this.cartButton = page.locator('//div[@class="cart-and-wishlist_3PHw"]/a[contains(@href,"/checkout/cart")]')
    this.profileUserBtn = page.locator('[data-test-id="qa-header-profile-button"]')
    this.loginButton = this.page.locator('a[data-test-id="qa-header-login-button"]')
    this.initPage();
  }

  clickOnCartListBtn = async () => {
    await this.cartButton.click();
    const minicartDivLocator = this.page.locator('//div[@class="minicart-wrapper_oequ"]');
    await minicartDivLocator.waitFor({ state: 'visible' });
    const cartButtonLocator = this.page.locator('//a[contains(text(), "סל קניות")]');
    await cartButtonLocator.waitFor({ state: 'visible' });
    await cartButtonLocator.click();
  };

  clickOnOnSaleBtn = async () => {
    await this.onSaleBtn.click();
  };

  async clickOnJustLanded () {
    await this.justLanded.click()
  }

  async clickOnMutagim () {
    await this.mutagim.click()
  }

  async clickOnSearchIcon () {
    await this.searchBtn.click()
  }

  async fillInSearchItem (searchItem: string) {
    await this.searchInput.fill(searchItem)
    await this.searchInput.press("Enter");
  }
  async clickOnProfileUserBtn () {
    await this.profileUserBtn.click()
  }

  async getLoginButtonText(): Promise<string> {
    const loginButtonText = await this.loginButton.innerText()
    return loginButtonText;
}

}

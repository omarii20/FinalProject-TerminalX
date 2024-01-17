import { Locator, Page } from "playwright"
import { BaseComponent } from "./base-component"

export class Header extends BaseComponent {
  
  private loginButton: Locator
  private searchBtn: Locator
  private searchInput: Locator
  private onSaleBtn: Locator
  private justLanded: Locator
  private mutagim: Locator
  private profileUserBtn: Locator


  constructor(page: Page) {
    super(page);
    this.loginButton = this.page.locator('a[data-test-id="qa-header-login-button"]')
    this.searchBtn = page.locator('[data-test-id="qa-header-search-button"]')
    this.searchInput = page.locator('[data-test-id="qa-search-box-input"]')
    this.onSaleBtn = page.locator('//a[text()="ON SALE"]')
    this.justLanded = page.locator('//a[text()="JUST LANDED"]')
    this.mutagim = page.locator('//a[text()="מותגים"]')
    this.profileUserBtn = page.locator('[data-test-id="qa-header-profile-button"]')
    this.initPage()
  }

  async clickOnOnSaleBtn () {
    await this.onSaleBtn.click()
  }

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

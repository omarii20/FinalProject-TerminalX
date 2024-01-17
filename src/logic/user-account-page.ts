import { Locator, Page } from "playwright"
import { BasePage } from "../infra/base-page"

export class userAccount extends BasePage {
  private logOutBtn: Locator

  constructor(page: Page) {
    super(page)
    this.logOutBtn = page.locator("button.tx-link-a.list-link_323s")
    this.initPage()
  }

  async clickOnLogOutBtn() {
    await this.logOutBtn.click()
  }
}

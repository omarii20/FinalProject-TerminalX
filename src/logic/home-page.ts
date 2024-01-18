import { Page } from "playwright";
import { BasePage } from "../infra/base-page";
import { Header } from "./components/header";
import { CheckOutCartList } from "./components/checkout-listCart";

export class HomePage extends BasePage {
    
  private header: Header; 
  private popupListItems: CheckOutCartList;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
    this.popupListItems = new CheckOutCartList(page);
  }

  async clickOnCartHeaderBtn() {
    await this.header.clickOnCartListBtn();
  }

  async getItemCountFromCheckoutList(): Promise<number> {
    return await this.popupListItems.getNumberOfItem();
  }

  async clicOnSearchHeaderBtn() {
    await this.header.clickOnSearchIcon();
  }

  async fillSearchInputHeader(searchItem: string) {
    await this.header.fillInSearchItem(searchItem);
  }

  async clickOnOnSaleBtnFromHeader () {
    await this.header.clickOnOnSaleBtn()
  };

  async clickOnJustLandedFromHeader () {
    await this.header.clickOnJustLanded()
  };

  async clickOnMutagimFromHeader () {
    await this.header.clickOnMutagim()
  }

  async clickOnProfileUserBtnFromHeader () {
    await this.header.clickOnProfileUserBtn()
  }

  async getLoginButtonTextFromHeader(): Promise<string> {
    return this.header.getLoginButtonText();
  }

}

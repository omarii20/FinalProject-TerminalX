import { Page } from "playwright";
import { BasePage } from "../infra/base-page";
import { Header } from "./components/header";
import { LoginPopUp } from "./components/pop-up-login";
import { PopUpCartList } from "./components/pop-up-cartList";

export class HomePage extends BasePage {
    
  private header: Header;
  private popuplogin: LoginPopUp;
  private popupListItems: PopUpCartList;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
    this.popuplogin = new LoginPopUp(page);
    this.popupListItems = new PopUpCartList(page);
    this.initPage()
  }

  async clickOnCartHeaderBtn() {
    await this.header.clickOnCartListBtn();
  }

  async validateItemIsAdded(): Promise<number> {
    return await this.popupListItems.validateItemInList();
  }

  async clicOnSearchHeaderBtn() {
    await this.header.clickOnSearchIcon();
  }

  async fillSearchInputHeader(searchItem: string) {
    await this.header.fillInSearchItem(searchItem);
  }

  async clickPopUpLoginBtn() {
    await this.popuplogin.clickOnLoginButton();
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

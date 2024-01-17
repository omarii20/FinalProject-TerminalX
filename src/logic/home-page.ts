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
  }

  async clickOnCartHeaderBtn() {
    await this.header.clickOnCartListBtn();
  }

  async validateItemIsAdded(): Promise<number> {
    return await this.popupListItems.validateItemInList();
  }

  async clicOnConnectionHeaderBtn() {
    await this.header.clickOnConnectionBtn();
  }
  
  async clicOnSearchHeaderBtn() {
    await this.header.clickOnSearchIcon();
  }

  async fillSearchInputHeader(searchItem: string) {
    await this.header.fillInSearchItem(searchItem);
  }

  async fillPopUpLoginEmail(input: string) {
    await this.popuplogin.fillEmail(input);
  }

  async fillPopUpLoginPassword(input: string) {
    await this.popuplogin.fillPassword(input);
  }

  async clickPopUpLoginBtn() {
    await this.popuplogin.clickOnLoginButton();
  }

  async fullLoginProcess(emailInput: string, passwordInput: string) {
    await this.popuplogin.fullLoginProcess(emailInput, passwordInput);
  }
  clickOnOnSaleBtnFromHeader = async () => {
    await this.header.clickOnOnSaleBtn()
  };

  clickOnJustLandedFromHeader = async () => {
    await this.header.clickOnJustLanded()
  };

  clickOnMutagimFromHeader = async () => {
    await this.header.clickOnMutagim()
  };
   
}

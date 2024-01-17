import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/base-page";

export class LoginPopUp extends BasePage{
    
    private loginButton:Locator;

    constructor(page: Page) {
        super(page);
        this.loginButton = page.locator('//button[@data-test-id="qa-login-submit"]')
        this.initPage();
    }

    clickOnLoginButton = async () => {
        await this.loginButton.click();
    }

}

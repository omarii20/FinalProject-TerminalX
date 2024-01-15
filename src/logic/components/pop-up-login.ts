import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/base-page";

export class LoginPopUp extends BasePage{
    
    private emailInput:Locator;
    private passwordInput:Locator;
    private loginButton:Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.locator('//div[contains(@class,"login-input-wrapper")]//input[@name="email"]')
        this.passwordInput = page.locator('//div[contains(@class,"login-input-wrapper")]//input[@name="password"]')
        this.loginButton = page.locator('//button[@data-test-id="qa-login-submit"]')
        this.initPage();
    }
    fillEmail = async (input:string) => {
        await this.emailInput.fill(input);
    }

    fillPassword = async (input:string) => {
        await this.passwordInput.fill(input);
    }

    clickOnLoginButton = async () => {
        await this.loginButton.click();
    }

    fullLoginProcess= async (emailInput:string,passwordInput:string) => {
        await this.fillEmail(emailInput);
        await this.fillPassword(passwordInput);
        await this.clickOnLoginButton();
    }
   
}

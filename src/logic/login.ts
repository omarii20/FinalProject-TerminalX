import { Locator, Page } from "playwright";
import { BasePage } from "../infra/base-page";
export class Login extends BasePage{
    private connectionButton:Locator;

    constructor(page: Page) {
        super(page);
        this.connectionButton=this.page.locator('//a[@href="/customer/account/login?r=%2Fcustomer%2Faccount"]');
        this.initPage();
    }
    openLoginPopup=async () => {
        await this.connectionButton.click();
    }

    fillEmail= async (input:string) => {
        const email=this.page.locator('//div[contains(@class,"login-input-wrapper")]//input[@name="email"]');
        await email.fill(input);
    }

    fillPassword= async (input:string) => {
        const password=this.page.locator('//div[contains(@class,"login-input-wrapper")]//input[@name="password"]')
        await password.fill(input);
    }

    clickOnLoginButton= async () => {
        const loginButton=this.page.locator('//button[@data-test-id="qa-login-submit"]');
        await loginButton.click();
    }

    fullLoginProcess= async (email:string,password:string) => {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickOnLoginButton();
    }
    validateLogin= async ()=>{
        const profileButton=this.page.locator('//button[@data-test-id="qa-header-profile-button"]')
        return await profileButton.isVisible();
    }
}
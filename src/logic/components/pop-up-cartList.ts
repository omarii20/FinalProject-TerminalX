import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/base-page";

export class PopUpCartList extends BasePage{
    private cartList: Locator;

    constructor(page: Page) {
        super(page);
        this.cartList = page.locator('//div[@class="cart-items-list_wmqo"]/div')
        this.initPage();
    }

    validateItemInList = async (): Promise<number> => {
        await this.page.waitForSelector('//div[@class="cart-items-list_wmqo"]/div')
        const result = await this.cartList.count();
        return result
    }

    checkoutCart = async (): Promise<string> => {
        const result = (await this.page.waitForSelector('//div/p[contains(text(), "סל הקניות שלך ריק.")]')).innerText()
        return result
    }

}
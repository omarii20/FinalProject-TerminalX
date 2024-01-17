import { Locator, Page } from "playwright";
import { BasePage } from "../infra/base-page";

export class Wishlist extends BasePage {
    private itemTitle = (sku: string,color:string) => this.page.locator(`//a[@href="/${sku.toLowerCase()}?color=${color}" and text()]`)
    constructor(page: Page) {
        super(page);
        this.initPage();
    }

    getItemTitleLocator(sku: string, color: string): Locator {
        return this.itemTitle(sku,color);

    }

}
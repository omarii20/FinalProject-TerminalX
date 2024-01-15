import { Page } from "playwright";
import { BasePage } from "../../infra/base-page";

export class BaseComponent extends BasePage {
    
    constructor(page: Page) {
        super(page);
    }
}
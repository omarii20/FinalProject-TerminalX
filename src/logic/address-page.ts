import { Page } from "playwright/test";
import { BasePage } from "../infra/base-page";

export class AddressPage extends BasePage {
    constructor(page: Page) {
        super(page);
        this.initPage();
    }

    async checkAddressValuesMatch(firstname: string, lastname: string, postcode: string, telephone: string, city: string, street: string[]): Promise<boolean> {
        await this.page.waitForSelector('.table-wrap-body_3QCY tr td');
        const addressValuesTexts = await this.page.evaluate(() => {
            const addressValueElements = document.querySelectorAll('.table-wrap-body_3QCY tr td');
            return Array.from(addressValueElements).map(td => td.textContent?.trim() || '');
        });
        const valuesMatch = [firstname, lastname, postcode, telephone, city,street.toString()]
            .every(value => addressValuesTexts.includes(value));

        return valuesMatch;
    }
}

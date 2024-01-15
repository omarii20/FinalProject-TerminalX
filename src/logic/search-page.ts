import { Locator, Page } from "playwright";
import { BasePage } from "../infra/base-page";

export class SearchPage extends BasePage {
    private listItemsCard: Locator;
    private randomItem: Locator | undefined;
    private randomItemBrandName: Locator | undefined;
    private ResultTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.listItemsCard = page.locator('//*[@class="product-list_yyTm"]//li');
        this.ResultTitle = page.locator('//div[@data-test-id="qa-search-results-page-title"]');
        this.initPage();
    }

    private async getRandomItem() {
        let index = Math.floor(Math.random() * (await this.listItemsCard.count()) + 1);
        if (index == 9) index++;
        this.randomItem = this.page.locator(`${`//*[@class="product-list_yyTm"]//li`}[${index}]`);
        return this.randomItem;
    }
    async getRandomItemBrand() {
        this.randomItemBrandName = (await this.getRandomItem()).locator('//div[@class="right_1o65"]//span');
        return await this.randomItemBrandName.textContent();
    }

    async isResultTitleContainBrandName(brand: string): Promise<boolean> {
        const text = await this.ResultTitle.innerText();
        const hasBrandName = text.includes(brand);
        return hasBrandName;
    }
}
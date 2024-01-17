import { Locator, Page } from "playwright"
import { BasePage } from "../infra/base-page"

export class SearchPage extends BasePage {
  private listItemsCard: Locator;
  private randomItem: Locator | undefined
  private randomItemBrandName: Locator | undefined
  private ResultTitle: Locator;
  private finalPrices: Locator;
  private selectSort: Locator;

  constructor(page: Page) {
    super(page);
    this.listItemsCard = page.locator('//*[@class="product-list_yyTm"]//li')
    this.ResultTitle = page.locator(".search-results_2YMu");
    this.finalPrices = page.locator(".row_2tcG.bold_2wBM.final-price_8CiX")
    this.selectSort = page.locator('select[name="sortField"]')
    this.initPage()
  }

  private async getRandomItem() {
    let index = Math.floor(
      Math.random() * (await this.listItemsCard.count()) + 1)
    if (index == 9) index++
    this.randomItem = this.page.locator(`${`//*[@class="product-list_yyTm"]//li`}[${index}]`)
    return this.randomItem
  }
  async getRandomItemBrand() {
    this.randomItemBrandName = (await this.getRandomItem()).locator('//div[@class="right_1o65"]//span');
    return await this.randomItemBrandName.textContent()
  }

  async isResultTitleContainBrandName(brand: string): Promise<boolean> {
    await this.page.waitForSelector('.search-results_2YMu')
    const text = await this.ResultTitle.innerText()
    const hasBrandName = text.includes(brand)


    return hasBrandName
  }
  async getFinalPricesList(): Promise<string[]> {
    const prices = await this.finalPrices.evaluateAll((priceElements) => {
      return priceElements.map((priceElement) => priceElement?.textContent?.trim()) as string[]
    });
    return prices.filter(Boolean) // Filter out null or undefined values
  }

  async choosePriceSortOption(option: string): Promise<void> {
    await this.selectSort.selectOption(option)
    await this.page.waitForSelector(".row_2tcG.bold_2wBM.final-price_8CiX")
  }

  isSorted(arr: string[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false
      }
    }
    return true
  }
}

import { Browser, Page, chromium } from "playwright";

export class BrowserWrapper {
    browser: Browser | undefined
    page: Page | undefined

    async getPage(url?: string) {
        this.browser = await chromium.launch();
        const context = await this.browser.newContext();
        this.page = await context.newPage();
        
        if (url) {
            await this.page.goto(url,{waitUntil:'load'});
        }
        return this.page
    }
    
    async maximizeWindow() {
        if (this.page) {
            await this.page.setViewportSize({ width: 1920, height: 1080 });
        }
    }

    // async getCookiesString() {
    //     if (this.page) {
    //         const cookiesArray = await this.page.context().cookies();
    //         return cookiesArray.map(cookie => `${cookie.name}=${cookie.value}`).join(',')
    //     }
    //     return [];
    // }

    async getCurrentPage() {
        if (!this.page) {
            throw new Error('Browser is not launched yet.');
        }
        return this.page;
    }

    async closeBrowser() {
        await this.browser?.close()
    }

}
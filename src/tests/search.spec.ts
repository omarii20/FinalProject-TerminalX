import {test,expect, Page} from "playwright/test";
import { BrowserWrapper } from "../infra/browser-wrapper";
import config from '../../config.json';
import { Header } from "../logic/components/header";
import { SearchPage } from "../logic/search-page";

test.describe('search about item verify results',()=>{
    let page: Page;
    let browser: BrowserWrapper;
    let searchpage : SearchPage
    test.beforeAll(async () => {
    browser = new BrowserWrapper;
    });

    test.beforeEach(async () => {
        page = await browser.getPage(config.baseUrl)
        const header = new Header(page)
        header.clickOnSearchIcon()
        await header.fillInSearchItem("adidas")
        searchpage = new SearchPage(page)

    });

    test("Search about a brand and validate items brand",async()=>{
        expect(await searchpage.getRandomItemBrand()).toContain("ADIDAS") 

    });

    test("Search about a brand and validate the result title text",async()=>{
        expect(await searchpage.isResultTitleContainBrandName("ADIDAS")).toBeTruthy() 
    });



});
import { test, expect, Page } from '@playwright/test';
import { ApiCall } from '../logic/api/apiRequests';
import { buildCartItemRequest } from '../logic/api/requestBody/addItem-request';
import { buildGetItemsRequest } from '../logic/api/requestBody/getCurrentUserItems-request';
import { buildDeleteItemRequest } from '../logic/api/requestBody/deleteItem-request';
import { HomePage } from '../logic/home-page';
import { BrowserWrapper } from '../infra/browser-wrapper';
import  config  from '../../config.json';

test.describe('Cart functionallity tests', () => {
    let page: Page;
    let browser: BrowserWrapper;
    let homepage: HomePage

    test.beforeAll(async () => {
        browser = new BrowserWrapper();
    });

    test.beforeEach(async () => {
        page = await browser.getPage(config.Pages_url.BASE_URL);
        homepage = new HomePage(page);
    });

    test.afterEach( async () => {
        const apiCalls = new ApiCall()
        const buildUserInfo =  buildGetItemsRequest(false, true, true, false)
        const responseUserInfo = await apiCalls.currentUserInfo(buildUserInfo);
        const itemToDelete = responseUserInfo.data.data.currentUserInfo.cart_object.items[0].id
        const buildDelItemReq =  buildDeleteItemRequest(itemToDelete)
        await apiCalls.deleteItemFromCart(buildDelItemReq);
    });

    test('Add item via api', async () => {
        //Arange
        const apiCallls = new ApiCall()
        const quantity = 1;
        const skuId = "W20253000104";

        //Act
        const data =  buildCartItemRequest(skuId, quantity)
        await apiCallls.addItemToCart(data);
        await page.reload();
        await page.waitForLoadState('networkidle')
        await homepage.clickOnCartHeaderBtn();
        const validateItemIsAdded = await homepage.validateItemIsAdded();

        //Assert
        expect(validateItemIsAdded).toBe(1);

    });
});
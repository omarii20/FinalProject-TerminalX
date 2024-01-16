import { test, expect, Page } from '@playwright/test';
import { ApiCall } from '../logic/api/apiRequests';
import { setWishListItem } from '../logic/api/requestBody/add-to-wishlist';
import config from '../../config.json';
import { BrowserWrapper } from '../infra/browser-wrapper';
import { AddProductsToWishlistResponse } from '../logic/api/resonseBody/addItemToWishlist-response';
import { Response } from "../logic/api/resonseBody/responseFromApi";

test.describe('Add new item to the wishlist', () => {
    let browser:BrowserWrapper;
    let page: Page;
    let response:Response<AddProductsToWishlistResponse>;
    test.beforeEach(async ()=>{
        const data= setWishListItem(["W177275026"],["93"],["9416"]);
        const apiCallls = new ApiCall()
        response = await apiCallls.addItemToWishlist(data);
        browser=new BrowserWrapper();
        page= await browser.getPage(config.baseUrl);
    })
    test('Add item to wishlist', async () => {
        
        console.log(( response.data.data.addProductsToWishlist.anyWishlist.items[0].id));
        console.log(response.data.data.addProductsToWishlist.anyWishlist.items[0].product.sku)
        expect(( response).ok).toBe(true)
    });
    test('remove item from wishlist', async()=>{

    })
});
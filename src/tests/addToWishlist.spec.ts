import { test, expect } from '@playwright/test';
import { ApiCall } from '../logic/api/apiRequests';
import {  setWishListItem } from '../logic/api/requestBody/add-to-wishlist-request';
import config from '../../config.json';
import { BrowserWrapper } from '../infra/browser-wrapper';
import { WishlistResponse, WishlistItem } from '../logic/api/resonseBody/wishlist-response';
import { Response } from "../logic/api/resonseBody/responseFromApi";
import { setWishListRemovedItem } from '../logic/api/requestBody/remove-from-wishlist-request';
import { Wishlist } from '../logic/wishlist-page';
test.describe('Add new item to the wishlist', () => {
    let addProductsToWishlistResponse:Response<WishlistResponse>;
    let apiCalls:ApiCall;
    let items:WishlistItem;
test('Add item to wishlist @wishlist', async () => {
    const data= setWishListItem(["W139512901"],["93"],["19554"]);
    apiCalls = new ApiCall();
    addProductsToWishlistResponse = await apiCalls.addItemToWishlist(data);
    items = addProductsToWishlistResponse.data.data.addProductsToWishlist.anyWishlist.items[0];
    const browser=new BrowserWrapper();
    const page= await browser.getPage(config.wishListUrl);
    const wishlist= new Wishlist(page);
    await expect( wishlist.getItemTitleLocator(items.product.sku,items.product.defaultColorValueIndex) ).toBeVisible();
});

test.afterEach(async()=>{
    const itemToRemove=setWishListRemovedItem(items.id);
    await apiCalls.removeFromWishlist(itemToRemove);
})
});
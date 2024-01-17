import { test, expect } from '@playwright/test';
import { ApiCall } from '../logic/api/apiRequests';
import { buildGetItemsRequest } from '../logic/api/requestBody/getCurrentUserItems-request';
import { buildDeleteItemRequest } from '../logic/api/requestBody/deleteItem-request';
import { buildCartItemRequest } from '../logic/api/requestBody/addItem-request';

test.describe('Cart functionallity testss', () => {

    test.beforeEach( async () => {
        const apiCallls = new ApiCall()
        const data =  buildCartItemRequest("W20253000104", 1)
        await apiCallls.addItemToCart(data);
    })

    test('Delete item via api', async () => {
        //arange
        const apiCalls = new ApiCall()
        const buildUserInfo =  buildGetItemsRequest(false, true, true, false);

        //act
        const responseUserInfo = await apiCalls.currentUserInfo(buildUserInfo);
        const itemToDelete = responseUserInfo.data.data.currentUserInfo.cart_object.items[0].id
        const buildDelItemReq =  buildDeleteItemRequest(itemToDelete)
        const response = await apiCalls.deleteItemFromCart(buildDelItemReq);

        //assert
        expect(response.data.data.removeItemFromAnyCart.total_quantity).toBe(0);
        expect(response.ok).toBe(true)
        expect(response.status).toBe(200)
    });

});
import { test, expect } from '@playwright/test';
import { ApiCall } from '../logic/api/apiRequests';
import {  buildCartItemRequest } from '../logic/api/requestBody/addItem-request';

test.describe('Add new item to the cart', () => {

    test.beforeEach(async () => {

    });

    test('Add item via api', async () => {
        //arange
        const data =  buildCartItemRequest("W20253000104", 3)
        const apiCallls = new ApiCall()
        //act
        const response = await apiCallls.addItemToCart(data);
        //assert
        console.log(response.data);
        expect(response.ok).toBe(true)
        expect(response.status).toBe(200)
    });
});
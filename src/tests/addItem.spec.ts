import { test, expect } from '@playwright/test';
import { ApiCall } from '../logic/api/apiRequests';
import { buildCartItemRequest } from '../logic/api/requestBody/addItem-request';
import { beforeEach } from 'node:test';

test.describe('Cart functionallity tests', () => {

    beforeEach( async => {

    })

    test('Add item via api', async () => {
        //arange
        const data =  buildCartItemRequest("W20253000104", 1)
        const apiCallls = new ApiCall()
        //act
        const response = await apiCallls.addItemToCart(data);
        //assert
        console.log(response.data)
        expect(response.ok).toBe(true)
        expect(response.status).toBe(200)
    });
});
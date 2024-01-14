import { test, expect } from '@playwright/test';
import { addItemToCart } from '../logic/api/apiRequests';

test.describe('Add new item to the cart', () => {

    test.beforeEach(async () => {

    });

    test('Add item via api', async () => {
        const response = addItemToCart("W20253000104", 1);
        console.log((await response).data);
    });
});
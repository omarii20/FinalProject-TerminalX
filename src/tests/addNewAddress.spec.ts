import { test, expect } from '@playwright/test';
import { ApiCall } from '../logic/api/apiRequests';
import config from '../../config.json';
import { BrowserWrapper } from '../infra/browser-wrapper';
import { Response } from "../logic/api/responseBody/responseFromApi";
import { CreateAddressResponse } from '../logic/api/responseBody/addAddress-response';
import { setAddressRequest } from '../logic/api/requestBody/addAddress-request';
import { AddressPage } from '../logic/address-page';
import { setRemoveAddress } from '../logic/api/requestBody/delete-address-request';

test.describe('Add new address', () => {
    let addAdressResponse:Response<CreateAddressResponse>;
    let apiCalls:ApiCall;

test('Add new address', async () => {
    const data= setAddressRequest("abeer","kmirat","22","0523055874","חיפה","IL",["שדה בוקר","11",""]);
    apiCalls = new ApiCall();
    addAdressResponse = await apiCalls.addNewAddress(data);
    const browser=new BrowserWrapper();
    const page= await browser.getPage(config.Pages_url.addressPage);
    const addressPage=new AddressPage(page);
    const checkAddressExist=await addressPage.checkAddressValuesMatch("abeer","kmirat","22","0523055874","חיפה",["שדה בוקר"," 11"])
    expect(checkAddressExist).toBeTruthy();
});

test.afterEach(async()=>{
    const id=addAdressResponse.data.data.createCustomerAddress.id;
    const itemToRemove=setRemoveAddress(id);
    await apiCalls.removeAddress(itemToRemove);
})
});
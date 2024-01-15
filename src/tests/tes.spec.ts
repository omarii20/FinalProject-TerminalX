import { CustomerApi } from "../logic/api-request"
import { setUserInfoRequest } from "../logic/user-info"
import {test,expect} from "playwright/test";

test.describe('User info test',()=>{
    test("update user info",async()=>{
        const apiRequest = new CustomerApi()
        const data = setUserInfoRequest("עביר")
        console.log(data);
        const response=await apiRequest.updateCustomeName(data)
        console.log(await response.json());
        expect(response.status()).toBe(200);
    });
});
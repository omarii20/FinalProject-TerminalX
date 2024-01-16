import { apiPostMethod } from "../../infra/apiPostMethod";
import { CartRequest } from "./requestBody/addItem-request";
import { AddItemResponse } from "./resonseBody/addItem-response"
import { requestUrls } from "../../../apiUrls.json";
import { Response } from "./resonseBody/responseFromApi";
import { LoginCredentials } from "../api/requestBody/login-request";
import { LoginResponse } from "./resonseBody/login-response";
import { APIRequestContext } from "playwright";

export class ApiCall{
    addItemToCart = async (data: CartRequest): Promise<Response<AddItemResponse>> => {
        return await apiPostMethod(requestUrls.addItemToCart, data);
    }
    
    loginApi = async (data: LoginCredentials, request: APIRequestContext): Promise<Response<LoginResponse>> => {
        return await apiPostMethod(requestUrls.loginViaApi, data, request);
    };
}

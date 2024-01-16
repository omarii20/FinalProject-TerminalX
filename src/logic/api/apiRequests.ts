import { apiPostMethod } from "../../infra/apiPostMethod";
import { CartRequest } from "./requestBody/addItem-request";
import { AddItemResponse } from "./resonseBody/addItem-response"
import { requestUrls } from "../../../apiUrls.json";
import { Response } from "./resonseBody/responseFromApi";
import { LoginCredentials } from "../api/requestBody/login-request";
import { LoginResponse } from "./resonseBody/login-response";
import { APIRequestContext } from "playwright";
import { WishListItem } from "./requestBody/add-to-wishlist";
import { AddProductsToWishlistResponse } from "./resonseBody/addItemToWishlist-response";

export class ApiCall{
    addItemToCart = async (data: CartRequest): Promise<Response<AddItemResponse>> => {
        return await apiPostMethod(requestUrls.addItemToCart, data);
    }
    
    loginApi = async (data: LoginCredentials, request: APIRequestContext): Promise<Response<LoginResponse>> => {
        return await apiPostMethod(requestUrls.loginViaApi, data, request);
    };

    addItemToWishlist=async (data:WishListItem):Promise<Response<AddProductsToWishlistResponse>> =>{
        return await apiPostMethod(requestUrls.addItemToWishlist,data);
    
    }
}

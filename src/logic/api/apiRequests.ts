import { apiPostMethod } from "../../infra/apiPostMethod";
import { CartRequest } from "./requestBody/addItem-request";
import { AddItemResponse } from "./resonseBody/addItem-response"
import { requestUrls } from "../../../apiUrls.json";
import { Response } from "./resonseBody/responseFromApi";
import { LoginCredentials } from "../api/requestBody/login-request";
import { LoginResponse } from "./resonseBody/login-response";
import { APIRequestContext } from "playwright";
import { WishListItem } from "./requestBody/add-to-wishlist-request";
import { WishlistResponse } from "./resonseBody/wishlist-response";
import { WishListRemovedItem } from "./requestBody/remove-from-wishlist-request";
import { CartObject } from "./requestBody/getCurrentUserItems-request";
import { UserInfoResponse } from "./resonseBody/getCurrentUserItems-response";
import { CartDeleteItem } from "./requestBody/deleteItem-request";
import { DeleteItemResponse } from "./resonseBody/deleteItem-response";

export class ApiCall{
    addItemToCart = async (data: CartRequest): Promise<Response<AddItemResponse>> => {
        return await apiPostMethod(requestUrls.addItemToCart, data);
    };
    
    loginApi = async (data: LoginCredentials, request: APIRequestContext): Promise<Response<LoginResponse>> => {
        return await apiPostMethod(requestUrls.loginViaApi, data, request);
    };

    addItemToWishlist=async (data:WishListItem):Promise<Response<WishlistResponse>> =>{
        return await apiPostMethod(requestUrls.addItemToWishlist,data);
    };

    removeFromWishlist=async (data:WishListRemovedItem):Promise<Response<WishlistResponse>> =>{
        return await apiPostMethod(requestUrls.deleteFromWishlist,data);
    }
    
    currentUserInfo = async (data: CartObject): Promise<Response<UserInfoResponse>> => {
        return await apiPostMethod(requestUrls.getUserInfo, data);
    }

    deleteItemFromCart = async (data: CartDeleteItem): Promise<Response<DeleteItemResponse>> => {
        return await apiPostMethod(requestUrls.deleteItemFromCart, data);
    }
}

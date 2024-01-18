import { apiPostMethod } from "../../infra/apiPostMethod";
import { CartRequest } from "./requestBody/addItem-request";
import { AddItemResponse } from "./responseBody/addItem-response"
import { requestUrls } from "../../../apiUrls.json";
import { Response } from "./responseBody/responseFromApi";
import { LoginCredentials } from "../api/requestBody/login-request";
import { LoginResponse } from "./responseBody/login-response";
import { APIRequestContext } from "playwright";
import { WishListItem } from "./requestBody/add-to-wishlist-request";
import { WishlistResponse } from "./responseBody/wishlist-response";
import { WishListRemovedItem } from "./requestBody/remove-from-wishlist-request";
import { CartObject } from "./requestBody/getCurrentUserItems-request";
import { UserInfoResponse } from "./responseBody/getCurrentUserItems-response";
import { CartDeleteItem } from "./requestBody/deleteItem-request";
import { DeleteItemResponse } from "./responseBody/deleteItem-response";
import { AddressRequest } from "./requestBody/addAddress-request";
import { CreateAddressResponse } from "./responseBody/addAddress-response";
import { RemoveAddress } from "./requestBody/delete-address-request";
import { DeleteCustomerAddressResponse } from "./responseBody/deleteAddress-response";

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

    addNewAddress = async (data: AddressRequest): Promise<Response<CreateAddressResponse>> => {
        return await apiPostMethod(requestUrls.addNewAddress, data);
    }
    removeAddress=async (data: RemoveAddress):Promise<Response<DeleteCustomerAddressResponse>> => {
        return await apiPostMethod(requestUrls.deleteAddress, data);
    }
}
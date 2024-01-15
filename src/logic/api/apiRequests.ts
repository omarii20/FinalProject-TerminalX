import { apiPostMethod } from "../../infra/apiPostMethod";
import { requestAddToCart } from "./requestBody/addItem-request";
import { AddItemResponse } from "./resonseBody/addItem-response"
import { requestsUrls } from "../../../apiUrls.json";
import { Response } from "./resonseBody/responseFromApi";

export const addItemToCart = async (itemSku: string, quantity: number): Promise<Response<AddItemResponse>> => {
    return await apiPostMethod(requestsUrls.addItemToCart, requestAddToCart(itemSku, quantity));
}
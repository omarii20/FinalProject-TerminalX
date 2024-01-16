import { apiPostMethod } from "../../../infra/apiPostMethod";


export interface WishListItem {
        sku: string[],
        attributes:string[],
        values:string[]
    };


export const setWishListItem = (sku:string[],attributes:string[],values:string[]): WishListItem => {
    return {
        sku:sku,
        attributes:attributes,
        values:values
    };
};


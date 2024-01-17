
export interface CartObject {
        withBasicDetails: boolean, 
        withCartObject: boolean, 
        withCartItems: boolean, 
        withCartCheckoutDetails: boolean
}

export const buildGetItemsRequest = (bs: boolean, co: boolean, ci: boolean, ccd: boolean): CartObject => {
    return {
        withBasicDetails: bs, 
        withCartObject: co, 
        withCartItems: ci, 
        withCartCheckoutDetails: ccd
    };
};

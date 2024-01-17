
export interface CartDeleteItem {
    cart_item_id: number, 
    withMultipass: boolean, 
    skip_collect: number 
}


export const buildDeleteItemRequest = (itemIdToDelete: number): CartDeleteItem => {
    return {
        cart_item_id: itemIdToDelete, 
        withMultipass: false,   
        skip_collect: 1
    };
};

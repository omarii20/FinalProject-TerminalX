import cookie from '../../../../playwright/.auth/user.json'

export interface CartItem {
    data: {
        quantity: number;
        any_sku: string;
    };
}

interface CartRequest {
    cart_items: CartItem[];
    skip_collect: number;
}

export const buildCartItemRequest = (itemId: string, quantity: number): CartRequest => {
    return {
        cart_items: [
            {
                data: {
                    quantity: quantity,
                    any_sku: itemId,
                },
            },
        ],
        skip_collect: 1,
    };
};

export const requestAddToCart = (itemId: string, quantity: number) => {
    return {
        data: buildCartItemRequest(itemId, quantity),
        headers: {
            "Content-Type": "application/json",
            "Cookie":`${cookie.cookies.slice(2).map(cookie=>`${cookie.name}=${cookie.value}`).join(';')}`
        }
    }
}
interface Product {
    sku: string;
    stock_status2: string;
    lastcall: string;
    __typename: string;
    id: number;
    visibility: string;
    status: string;
    early_cutoff: number;
    justlanded: string;
    image:Image;
    defaultColorValueIndex:string;
}

export interface WishlistItem {
    id: number;
    product: Product;
}

interface Wishlist {
    items_count: number;
    items: WishlistItem[];
}
interface Image{
    disabled:boolean,
    label:string,
    url:string
}

export interface WishlistResponse {
    data: {
        addProductsToWishlist: {
            changed: number;
            anyWishlist: Wishlist;
        };
    };
}
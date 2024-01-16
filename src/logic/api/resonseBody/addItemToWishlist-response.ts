interface Product {
    sku: string;
    stock_status2: string;
    lastcall: string;
    __typename: string;
    id: number;
    visibility: string;
    status: string;
    early_cutoff: number;
    icon_stampa: unknown; 
    justlanded: string;
}

interface WishlistItem {
    id: number;
    product: Product;
}

interface Wishlist {
    items_count: number;
    items: WishlistItem[];
}

export interface AddProductsToWishlistResponse {
    data: {
        addProductsToWishlist: {
            changed: number;
            anyWishlist: Wishlist;
        };
    };
}
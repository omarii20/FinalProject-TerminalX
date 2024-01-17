

export interface WishListRemovedItem {
    id:number;
};


export const setWishListRemovedItem = (id:number): WishListRemovedItem => {
return {
    id:id
};
};


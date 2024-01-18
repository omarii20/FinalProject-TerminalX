

export interface RemoveAddress {
    id:number;
};


export const setRemoveAddress = (id:number): RemoveAddress => {
return {
    id:id
};
};


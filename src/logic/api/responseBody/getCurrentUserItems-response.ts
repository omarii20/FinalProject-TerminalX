export interface UserInfoResponse {
    data: {
        currentUserInfo:
        { 
            customerId: number,
            cart_object: {
                id: string,
                items: [
                    {
                        __typename: string,
                        id: number
                    }
                ],
            }
        } 
    }
}

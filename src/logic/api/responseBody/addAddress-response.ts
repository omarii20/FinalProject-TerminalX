export interface CreateAddressResponse {
    data: {
        createCustomerAddress: {
            id: number;
            region: null | string; 
            country_code: string;
            street: string[];
            telephone: string;
            postcode: string;
            city: string;
            default_shipping: boolean;
            default_billing: boolean;
        };
    };
}
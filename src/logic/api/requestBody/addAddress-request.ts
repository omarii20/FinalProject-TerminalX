

export interface AddressRequest {
    input: {
        firstname: string;
        lastname: string;
        postcode: string;
        telephone: string;
        city: string;
        country_id: string;
        street: string[];
    };
}


export const setAddressRequest = (firstname:string,lastname:string,postcode:string,telephone:string,city:string,country_id:string,street:string[]): AddressRequest => {
return {
    input: {
        firstname: firstname,
        lastname: lastname,
        postcode: postcode,
        telephone: telephone,
        city: city,
        country_id: country_id,
        street: street
    }
};
};




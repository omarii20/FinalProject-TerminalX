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
            "Cookie":"_ga=GA1.2.2139102953.1704983774; syte_uuid=c5aabe10-b08e-11ee-b2a8-8178519edf4b; _gcl_au=1.1.663268281.1704983775; _tt_enable_cookie=1; _ttp=Q1DQSSns3bRR_lYSHuRWxFm1H40; _fbp=fb.1.1704983775830.1486217487; glassix-visitor-id-v2-b6d2bc1d-dcdc-4766-b620-28559157075a=5205fe4c-ccdb-43a9-89f5-a34331604cc1; fe-version=73f98dad7c9d1f04495fa513eeb345f1ed9de26e; syte_ab_tests={}; current-universe-id-1=1; _gid=GA1.2.2050783172.1705142435; language=he; counter=0; PHPSESSID=dode9iug0loj7jlolcve6tet3n; idus-cache-loggedin=1; RSESSIONID=52437f95-598c-4123-8744-25ca773d4503; stimgs={%22sessionId%22:56050751%2C%22didReportCameraImpression%22:true%2C%22newUser%22:false}; _dc_gtm_UA-99383422-1=1; _uetsid=2f43c520b20011eea312d38dfe71204b; _uetvid=c62adaf0b08e11ee81d55d2834211d4a; private_content_version=25e70e877f7ca5ba44090868f2996492"
        }
    }
}
import { request } from "playwright";
import { Response } from "../logic/api/resonseBody/responseFromApi";

export const apiPostMethod = async <T>(url: string, data?: any): Promise<Response<T>> => {
    const APIRequest = await (await request.newContext()).post(url, {data})
    const response: Response<T> = {
        data: await APIRequest.json(),
        ok: APIRequest.ok(),
        status: APIRequest.status()
    };
    return response;
}
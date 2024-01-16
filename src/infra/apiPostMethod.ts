import { APIRequestContext, request } from "playwright";
import { Response } from "../logic/api/resonseBody/responseFromApi";

export const apiPostMethod = async <T>(url: string, data?: any, req?: APIRequestContext): Promise<Response<T>> => {
    const currentContext = req || await request.newContext();
    const APIRequest = await currentContext.post(url, {data})

    const response: Response<T> = {
        data: await APIRequest.json(),
        ok: APIRequest.ok(),
        status: APIRequest.status()
    };
    return response;
}
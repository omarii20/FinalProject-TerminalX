import { request } from "@playwright/test"
import { UserInfoRequest } from "../logic/user-info"
export const postRequest = async (url:string,body:UserInfoRequest,header: any) => {
    const myRequest = await request.newContext()
    return await myRequest.post(url,{
    data:body,
    headers:header
   })      
}
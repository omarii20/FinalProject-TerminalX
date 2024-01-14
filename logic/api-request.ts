
import { postRequest } from "../infra/apiRequests";
import { UserInfoRequest } from "./user-info";
export class CustomerApi{

    async updateCustomeName(data:UserInfoRequest ){
        const headers= {
            "Content-Type": "application/json",
            "Cookie":"syte_uuid=9e055ce0-b083-11ee-8fac-9b5cccc73475; _ga=GA1.2.1371570470.1704978983; _gcl_au=1.1.939623670.1704978985; _tt_enable_cookie=1; _ttp=w755hJThHaySgMm95ISZzlc_F19; _fbp=fb.1.1704978990990.483888860; glassix-visitor-id-v2-b6d2bc1d-dcdc-4766-b620-28559157075a=91088da2-19f2-4f7c-a030-447303b3c3ba; fe-version=73f98dad7c9d1f04495fa513eeb345f1ed9de26e; PHPSESSID=33ldke0c3rkql26f9p6nmpts6s; idus-cache-loggedin=1; current-universe-id-1=123; _gid=GA1.2.779176613.1705081188; wz.uid=0s71l10koZ924A0h821A5l9M8; syte_ab_tests={}; RSESSIONID=32ba6dcf-c8bb-44ac-94d8-23a1f4ef9476; language=he; wz.sid_71890b4b-2c91-43ff-b553-fe47f742a666=0Zz667183c1186w0mm513V7bc; membership_points=19; wz.flowsMapSegmentKeys=%5B%5D; wz.flowsGroupBySegmentKeys=%5B%5D; stimgs={%22sessionId%22:7660835%2C%22didReportCameraImpression%22:true%2C%22newUser%22:false}; _gcl_aw=GCL.1705178240.Cj0KCQiAhomtBhDgARIsABcaYyn-BjDUF-DcWIgaHy3B-ReFDNlpON7P9Dx65LtEg4v3TeH5rFy95-saAq4DEALw_wcB; _gac_UA-99383422-1=1.1705178240.Cj0KCQiAhomtBhDgARIsABcaYyn-BjDUF-DcWIgaHy3B-ReFDNlpON7P9Dx65LtEg4v3TeH5rFy95-saAq4DEALw_wcB; _uetsid=96ce7d20b17111ee8f8b3bb5ebc26486; _uetvid=a100ad20b08311eeb273813295260b43; wz.sid=0Zz667183c1186w0mm513V7bc; _dc_gtm_UA-99383422-1=1; wz.pid=HP1878770B97P573zX76eA1Kn; wz.state=1705178779786; wz_visited_pages=%7B%22counter%22%3A4%7D; private_content_version=b944c5be6761a1e9f1ae6bad4c5ed323"
           
        }
        return await postRequest('https://www.terminalx.com/pg/MutationCustomerEdit?v=RuN77Txv3TNDv0fVjnhNRK%2BL8Ww%3D' ,data,headers)
    }

}
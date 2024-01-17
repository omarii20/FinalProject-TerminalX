// import { test, expect, Page } from '@playwright/test'
// import { ApiCall } from '../logic/api/apiRequests'
// import { buildGetItemsRequest } from '../logic/api/requestBody/getCurrentUserItems-request'
// import { buildDeleteItemRequest } from '../logic/api/requestBody/deleteItem-request'
// import { buildCartItemRequest } from '../logic/api/requestBody/addItem-request'
// import { BrowserWrapper } from '../infra/browser-wrapper'
// import { HomePage } from '../logic/home-page'
// import  config  from '../../config.json'

// test.describe('Cart functionallity testss', () => {
//     let page: Page
//     let browser: BrowserWrapper
//     let homepage: HomePage

//     test.beforeAll(async () => {
//         browser = new BrowserWrapper()
//     });

//     test.beforeEach( async () => {
//         const apiCallls = new ApiCall()
//         const data =  buildCartItemRequest("W20253000104", 1)
//         const response = await apiCallls.addItemToCart(data)
//         page = await browser.getPage(config.Pages_url.listCartUrl)
//         homepage = new HomePage(page)
//     })

//     test('Delete item via api', async () => {
//         //arange
//         const apiCalls = new ApiCall()
//         const buildUserInfo =  buildGetItemsRequest(false, true, true, false)

//         //act
//         const responseUserInfo = await apiCalls.currentUserInfo(buildUserInfo)
//         const itemToDelete = responseUserInfo.data.data.currentUserInfo.cart_object.items[0].id
//         const buildDelItemReq =  buildDeleteItemRequest(itemToDelete)
//         await apiCalls.deleteItemFromCart(buildDelItemReq)
//         await page.reload()
//         const validateItemIsAdded = await homepage.checkOutListEmpty()

//         //assert
//         expect(validateItemIsAdded).toBe("סל הקניות שלך ריק.")
//     });

// });
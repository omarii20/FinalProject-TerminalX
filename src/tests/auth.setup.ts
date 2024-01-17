// auth.setup.ts
import { test as setup } from '@playwright/test'
import { ApiCall } from '../logic/api/apiRequests'
import { BuildLoginRequest } from '../logic/api/requestBody/login-request'
import config from '../../config.json'

const authFile = 'playwright/.auth/user.json'

setup('authenticate', async ({ request }) => {
    const data = BuildLoginRequest(config.Email, config.Password)
    const apiCallls = new ApiCall()
    await apiCallls.loginApi(data, request)
    await request.storageState({ path: authFile })
});

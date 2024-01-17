// auth.setup.ts
import { test as setup } from '@playwright/test'
import { ApiCall } from '../logic/api/apiRequests'
import { BuildLoginRequest } from '../logic/api/requestBody/login-request'
import { after } from 'node:test'
import config from '../../config.json'

const authFile = 'playwright/.auth/user.json'

setup('authenticate', async ({ request }) => {
    const data = BuildLoginRequest(config.Email, config.Password);
    const apiCallls = new ApiCall()
    const result = await apiCallls.loginApi(data, request)
    await request.storageState({ path: authFile });
});

after(async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
});

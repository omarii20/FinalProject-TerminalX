
// auth.setup.ts
import { test as setup } from '@playwright/test';
import { ApiCall } from '../logic/api/apiRequests';
import config from '../../config.json';
import { BuildLoginRequest } from '../logic/api/requestBody/login-request';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    await page.goto(config.baseUrl);
    const data = BuildLoginRequest(config.email, config.password);
    const apiCallls = new ApiCall()
    const result = await apiCallls.loginApi(data)
    console.log(result)
    await page.context().storageState({ path: authFile });
});
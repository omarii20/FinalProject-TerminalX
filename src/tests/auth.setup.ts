// auth.setup.ts
import { expect, test as setup } from '@playwright/test';
import { Login } from '../logic/login';
import config from '../../config.json';
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    await page.goto(config.baseUrl);
    const login=new Login(page);
    await login.openLoginPopup();
    await login.fullLoginProcess(config.email,config.password);
    await page.waitForURL(config.baseUrl);
    expect(login.validateLogin).toBeTruthy();
    await page.context().storageState({ path: authFile });

});
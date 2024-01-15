// auth.setup.ts
import { test as setup } from '@playwright/test';
import config from '../../config.json';
import { Header } from '../logic/components/header';
import { LoginPopUp } from '../logic/components/pop-up-login';
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page}) => {
    await page.goto(config.baseUrl);
    const header = new Header(page);
    await header.clickOnConnectionBtn();
    const loginpopup = new LoginPopUp(page)
    await loginpopup.fullLoginProcess(config.email,config.password);
    await page.waitForLoadState('networkidle');
    await page.context().storageState({ path: authFile });
});
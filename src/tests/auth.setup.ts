// auth.setup.ts
import { test as setup } from '@playwright/test';
import config from '../../config.json';
import { HomePage } from '../logic/home-page';
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page}) => {
    await page.goto(config.baseUrl);
    const homepage = new HomePage(page)
    await homepage.clicOnConnectionHeaderBtn()
    await homepage.fullLoginProcess(config.email,config.password)
    await page.context().storageState({ path: authFile });
});
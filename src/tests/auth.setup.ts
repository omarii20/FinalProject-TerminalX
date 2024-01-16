
// auth.setup.ts
import { test as setup } from '@playwright/test';
// import config from '../../config.json';
import { HomePage } from '../logic/home-page';
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page}) => {
    await page.goto('https://www.terminalx.com/men');
    const homepage = new HomePage(page)
    await homepage.clicOnConnectionHeaderBtn()
    await homepage.fullLoginProcess('kamilabuelhija@gmail.com','K0159667a!')
    await page.context().storageState({ path: authFile });
});
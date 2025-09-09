import test from '@playwright/test';
import { MainPage } from '../../pages/MainPage';
test('Main page opening test', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});

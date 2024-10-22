// @ts-check
const { test, expect } = require('@playwright/test');
// const { expect, test, devices } = require('@playwright/test');


test('SonarQube > 로그인 페이지 진입 > 로그인 수행 > Progect 화면 노출 > 페이지 닫기', async ({ page }) => {
  await page.goto('http://223.131.50.184:9000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("SonarQube");
  await page.getByPlaceholder("Login").fill("admin");
  await page.getByPlaceholder("Password").fill("qwer");
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page).toHaveTitle("Projects");
  console.log("login success");
 // page.close();
});


// @ts-check
// const { test, expect } = require('@playwright/test');
const { expect, test, devices } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('SonarQube > 로그인 페이지 진입 > 로그인 수행 > Progect 화면 노출 > 페이지 닫기', async ({ page }) => {
  await page.goto('http://127.0.0.1:9000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("SonarQube");
  await page.getByPlaceholder("Login").fill("admin");
  await page.getByPlaceholder("Password").fill("qwer");
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page).toHaveTitle("Projects");
  console.log("login success");
  page.close();
});


test.use(devices['Galaxy S9+']);

test('Galaxy S9+ 모바일 브라우저 테스트 시나리오', async ({ page, context }) => {
  await context.route('**.jpg', route => route.abort());
  await page.goto('https://naver.com/');

  await expect(page).toHaveTitle('NAVER');
  console.log("login success");
  page.close();
});

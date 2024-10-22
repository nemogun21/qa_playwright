// @ts-check
// const { test, expect } = require('@playwright/test');
const { expect, test, devices } = require('@playwright/test');

test.use(devices['Galaxy S9+']);

test('Galaxy S9+ 모바일 브라우저 테스트 시나리오', async ({ page, context }) => {
  await context.route('**.jpg', route => route.abort());
  await page.goto('https://naver.com/');

  await expect(page).toHaveTitle('NAVER');
  console.log("login success");
  page.close();
});

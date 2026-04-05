import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  console.log('Visiting Home Page...');
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verification/home_featured.png', fullPage: false });

  console.log('Visiting OMC Listing Page...');
  await page.goto('http://localhost:3000/products/omc-centrifugal-pumps');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verification/omc_listing.png', fullPage: true });

  console.log('Visiting HM650 Page...');
  await page.goto('http://localhost:3000/products/omc-centrifugal-pumps/omc-hm650-high-mount-horizontal-centrifugal-pump');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verification/hm650_detail.png', fullPage: true });

  console.log('Checking Inquiry Form section...');
  const inquiry = await page.$('#product-inquiry');
  if (inquiry) {
    await inquiry.scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'verification/inquiry_form.png' });
  }

  await browser.close();
})();

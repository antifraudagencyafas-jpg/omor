import { test, expect } from '@playwright/test';

test('verify contact page and footer', async ({ page }) => {
  // Increase timeout for slow build environments
  test.setTimeout(120000);

  // Go to the contact page
  await page.goto('http://localhost:3000/contact');
  await page.waitForLoadState('networkidle');

  // Take a screenshot of the contact details section
  const contactDetails = page.locator('.lg\\:col-span-1').first();
  await contactDetails.screenshot({ path: 'screenshot-contact-details.png' });

  // Scroll to footer and take a screenshot
  const footer = page.locator('footer');
  await footer.scrollIntoViewIfNeeded();
  await footer.screenshot({ path: 'screenshot-footer.png' });
});

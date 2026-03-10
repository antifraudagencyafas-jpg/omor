import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Check category page
        await page.goto("http://localhost:3009/products/solar-pumps")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="/home/jules/verification/solar_category.png", full_page=True)

        # Check a product detail page
        await page.goto("http://localhost:3009/products/solar-pumps/otp-5975-centrifugal-pumps-ac-solar-centrifugal-pumps")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="/home/jules/verification/solar_product_detail.png", full_page=True)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())

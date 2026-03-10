import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Check category page
        await page.goto("http://localhost:3009/products/solar-pumps")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="/home/jules/verification/solar_category_v2.png", full_page=True)

        # Check a product detail page
        await page.goto("http://localhost:3009/products/solar-pumps/xstp-horizontal-single-stage-centrifugal-pump")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="/home/jules/verification/solar_product_detail_v2.png", full_page=True)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())

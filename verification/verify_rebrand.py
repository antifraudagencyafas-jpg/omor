import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.set_viewport_size({"width": 1280, "height": 800})

        print("Visiting Home Page...")
        await page.goto("http://localhost:3000")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="verification/home_rebranded.png")

        print("Visiting OMC Listing Page...")
        await page.goto("http://localhost:3000/products/omc-centrifugal-pumps")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="verification/omc_listing_rebranded.png", full_page=True)

        print("Visiting HM650 Page...")
        await page.goto("http://localhost:3000/products/omc-centrifugal-pumps/omc-hm650-high-mount-horizontal-centrifugal-pump")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="verification/hm650_detail_rebranded.png", full_page=True)

        print("Checking Inquiry section on HM650 page...")
        inquiry = await page.query_selector("#product-inquiry")
        if inquiry:
            await inquiry.scroll_into_view_if_needed()
            await page.screenshot(path="verification/inquiry_section.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())

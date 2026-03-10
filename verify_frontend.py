import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Start the dev server
        # We assume it might be running or we start it.
        # Since I'm in a bash session, I'll just assume I need to start it if not running.
        # But wait, I can just use the build output if I run pnpm start.

        try:
            await page.goto("http://localhost:3008/news")
            await page.wait_for_timeout(2000)
            await page.screenshot(path="news_page_final.png", full_page=True)
            print("Screenshot saved to news_page_final.png")

            # Also check a detail page
            # Get the first news link
            first_news = await page.query_selector("a[href^='/news/']")
            if first_news:
                href = await first_news.get_attribute("href")
                await page.goto(f"http://localhost:3008{href}")
                await page.wait_for_timeout(2000)
                await page.screenshot(path="news_detail_final.png", full_page=True)
                print(f"Detail screenshot saved for {href}")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())

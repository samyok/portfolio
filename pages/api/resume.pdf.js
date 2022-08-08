import * as playwright from "playwright-aws-lambda";

module.exports = async (req, res) => {
  const browser = await playwright.launchChromium({ headless: true });
  const context = await browser.newContext({
    viewport: {
      width: 1200,
      height: 630,
    },
  });
  const page = await context.newPage();
  await page.goto("https://yok.dev/resume?print");
  const pdf = await page.pdf();
  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
  res.setHeader("Content-Type", "application/pdf");
  res.status(200).send(pdf);
  await browser.close();
};

const sleep = (n) => new Promise((r) => setTimeout(r, n));

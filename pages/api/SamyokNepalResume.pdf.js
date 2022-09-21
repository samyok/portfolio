import * as playwright from "playwright-aws-lambda";
import { fonts } from "../../data/fonts";

module.exports = async (req, res) => {
  for (const font of fonts) {
    await playwright.loadFont(font);
  }

  const browser = await playwright.launchChromium({ headless: true });
  const context = await browser.newContext({
    viewport: {
      width: 1200,
      height: 630,
    },
  });
  const page = await context.newPage();
  await page.goto("https://yok.dev/resume?print");
  await sleep(1000);
  const pdf = await page.pdf();
  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=SamyokNepalResume.pdf");
  res.status(200).send(pdf);
  await browser.close();
};

const sleep = (n) => new Promise((r) => setTimeout(r, n));

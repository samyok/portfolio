import * as playwright from "playwright-aws-lambda";
import { fonts } from "../../data/fonts";

module.exports = async (req, res) => {
  console.log("starting to load fonts!");
  for (const font of fonts) {
    console.log("loading font", font);
    await playwright.loadFont(font);
    console.log("loaded font", font);
  }

  console.log("fonts loaded. launching browser");
  const browser = await playwright.launchChromium({ headless: true });
  console.log("browser launched. creating context");
  const context = await browser.newContext({
    viewport: {
      width: 1200,
      height: 630,
    },
  });
  const page = await context.newPage();
  const loaded = page.waitForNavigation({ waitUntil: "load" });
  console.log("context created. navigating to page");
  if (process.env.VERCEL_URL) {
    await page.goto("https://" + process.env.VERCEL_URL + "/resume?print");
  } else {
    await page.goto("http://localhost:3000/resume?print");
  }
  console.log("page loaded. waiting for 1000 ms");
  await sleep(500);
  await loaded;
  console.log("taking pdf");
  const pdf = await page.pdf({});
  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=SamyokNepalResume.pdf");
  res.status(200).send(pdf);
  console.log("pdf sent. closing.");
  await browser.close();
};

const sleep = (n) => new Promise((r) => setTimeout(r, n));

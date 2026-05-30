const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  await page.goto('http://localhost:3000/manga');
  await page.waitForTimeout(2000);
  
  // click the first comic card
  await page.click('.comic-card');
  
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'mobile.png' });
  
  await browser.close();
})();

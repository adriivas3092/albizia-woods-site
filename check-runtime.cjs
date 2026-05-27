const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.toString());
  });
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('CONSOLE ERROR:', msg.text());
    }
  });

  try {
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });
    console.log('Page loaded successfully without crashing.');
    const title = await page.title();
    console.log('Title:', title);
  } catch (err) {
    console.error('Failed to load:', err);
  }
  
  await browser.close();
})();

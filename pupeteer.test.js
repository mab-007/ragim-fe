import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://google.com/');

//   await page.setViewport({width: 1080, height: 1024});

  await page.keyboard.type('Akasa Air web check in');
  await page.keyboard.press('Enter', {delay: 1000});

  // Set screen size
//   await page.screenshot({path: 'akasasearch.png'});

//     await new Promise(resolve => setTimeout(resolve, 1000));
await page.mouse.click(90, 200);
    // await page.mouse.down();
    // await page.mouse.up();
   // await page.mouse.click(10,100);
//   await page.keyboard.type('Akasa Air web check in');
//   await page.keyboard.press('Enter');
    // const x = (32+165)/2;
    // const y = (344 + 365)/2;
    // await page.mouse.click(x,y);

//   // Type into search box
//   await page.type('.devsite-search-field', 'automate beyond recorder');

//   // Wait and click on first result
//   const searchResultSelector = '.devsite-result-item-link';
//   await page.waitForSelector(searchResultSelector);
//   await page.click(searchResultSelector);

//   // Locate the full title with a unique string
//   const textSelector = await page.waitForSelector(
//     'text/Customize and automate',
//   );
//   const fullTitle = await textSelector?.evaluate(el => el.textContent);

//   // Print the full title
//   console.log('The title of this blog post is "%s".', fullTitle);

//   await browser.close();
})();
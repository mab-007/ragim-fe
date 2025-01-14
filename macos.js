const { Builder, By } = require('selenium-webdriver');
const fs = require('fs');

async function getHtmlContent() {
  // Set up Selenium WebDriver
  let driver = await new Builder().forBrowser('chrome').setChromeOptions({args: ['--headless', '--disable-gpu'],}).build();

  // Navigate to the webpage
  await driver.get('https://deepmind.google');

  // Get the HTML content of the webpage
  let htmlContent = await driver.getPageSource();

  // Write the HTML content to a text file
  fs.writeFileSync('output.txt', htmlContent);

  // Close the WebDriver
  await driver.quit();
}

getHtmlContent();
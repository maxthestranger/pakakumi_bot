const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  // await page.setViewport({ width: 1920, height: 1080 });

  // navigate to the page and wait for it to load
  await page.goto("https://play.pakakumi.com", { waitUntil: "networkidle0" });

  // click on the login button and wait for the login modal to appear
  await page.click(
    "#root > div.css-18t74jv > div:nth-child(1) > div > div.css-1cmveru > div > a:nth-child(1)"
  );
  const loginModal = await page.waitForSelector(
    "#root > div.css-9mxzmf > div > div",
    { visible: true }
  );

  // enter the phone number and password
  await page.waitForSelector(
    "#root > div.css-9mxzmf > div > div > div > div > div:nth-child(1) > div > input"
  );

  // enter the phone number and password
  await page.type(
    "#root > div.css-9mxzmf > div > div > div > div > div:nth-child(1) > div > input",
    "0792922304"
  );

  await page.waitForSelector(
    "#root > div.css-9mxzmf > div > div > div > div > div:nth-child(2) > div > input"
  );
  await page.type(
    "#root > div.css-9mxzmf > div > div > div > div > div:nth-child(2) > div > input",
    "Cynderela1!"
  );

  // click the login button
  await page.click(
    "#root > div.css-9mxzmf > div > div > div > div > div.d-grid > button"
  );

  // locate the amount and cashout fields and enter the values
  const amountField = await page.waitForSelector("#tour_bet_amount", {
    visible: true,
  });
  await amountField.click({ clickCount: 4 });
  await amountField.press("Backspace");
  //   await amountField.type("10");
  const cashoutField = await page.waitForSelector("#tour_bet_auto_cashout", {
    visible: true,
  });
  await cashoutField.click({ clickCount: 4 });
  await cashoutField.press("Backspace");
  await cashoutField.type("1.01");

  async function clickButton() {
    await page.waitForSelector("#tour_bet_button");

    // Click the button
    await page.click("#tour_bet_button");
  }

  // click the bet button
  setInterval(clickButton, 60 * 1000);

  // close the browser when the loop is finished
  //   await browser.close();
})();

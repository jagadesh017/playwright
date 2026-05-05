const { test, expect } = require('@playwright/test');
const FacebookLoginPage = require('../pages/FacebookLoginPage');

test.only("facebook login page", async ({ page }) => {
    const facebookLoginPage = new FacebookLoginPage(page);
    await facebookLoginPage.goto();
    console.log(await page.title());
    await expect(page).toHaveTitle("Facebook");
    await facebookLoginPage.login("jagadeesh", "password");
    const errorMsg = await facebookLoginPage.getErrorMessage();
    console.log(errorMsg);
    await facebookLoginPage.expectErrorMessage("The password you entered is incorrect.")
    })
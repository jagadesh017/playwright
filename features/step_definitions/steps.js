const { When, Then, Given, Before, After } = require('@cucumber/cucumber');
const { expect, chromium } = require('@playwright/test');
const SignupPage = require('../../pages/SignupPage.js');

let page;
let browser;
let signupPage;

Before(async function() {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
});

Given('User is on facebook homepage', async function() {
    signupPage = new SignupPage(page);
    await signupPage.goto();
});

When('User should click on signup button', async function() {
    await signupPage.signupLink();
});

Then('User should navigate to the signup page of facebook', async function() {
    await signupPage.verifySignupPage();
});

Then('User should enter the firstname and lastname', async function() {
    await signupPage.enterUserNameAndPass("Jagadeesh", "Kumar");
});

After(async function() {
    if (browser) {
        await browser.close();
    }
});

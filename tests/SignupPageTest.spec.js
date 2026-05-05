const {test, expect} = require('@playwright/test');
const SignupPage = require('../pages/SignupPage.js');

test("Signup page", async ({page}) => {
    const signupPage = new SignupPage(page);
    await signupPage.goto();
    console.log(await page.title());
    await expect(page).toHaveTitle("Facebook");
    await signupPage.signupLink();
    await signupPage.enterUserNameAndPass("jagadeesh", "password");
    await signupPage.selectMonthByText("May");
    await page.pause();

})
const {test, expect} = require('@playwright/test');
const SignupPage = require('../pages/SignupPage.js');
const testData = require('../pages/data.json');

for(const data of testData) {
    test(`Signup page with ${data.username} and ${data.password}` , async ({page}) => {
    const signupPage = new SignupPage(page);
    await signupPage.goto();
    console.log(await page.title());
    await expect(page).toHaveTitle("Facebook");
    await signupPage.signupLink();
    await signupPage.enterUserNameAndPass(data.username, data);
    //await signupPage.selectMonthByText("May");
    await page.pause();

})}
const { test, expect } = require('@playwright/test');
const SignupPage = require('../pages/SignupPage.js');
const { readExcelData } = require('../pages/excelReader.js');

// Load data from your Excel file
const testData = readExcelData('../data/users.xlsx');

for (const data of testData) {
  test(`Signup test for: ${data.username}`, async ({ page }) => {
    const signupPage = new SignupPage(page);

    await signupPage.goto();
    await signupPage.signupLink();

    // Use column names from your Excel as keys (e.g., data.username)
    await signupPage.enterUserNameAndPass(data.username, data.password);
    
    await signupPage.selectMonthByText(data.month || "May");
  });
}

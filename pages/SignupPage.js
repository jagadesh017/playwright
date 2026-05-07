const BasePage = require('../tests/BasePage.js');
const {expect} = require('@playwright/test');
class SignupPage extends BasePage {

  constructor(page) {
      super(page);
      this.signup = page.locator("//*[text()='Create new account']");
      this.userName = page.locator('#_R_1cl2p4jikacppb6amH1_');
      this.password = page.locator('#_R_1kl2p4jikacppb6amH1_');
      this.month = page.locator("#_r_9_");
      }
async goto() {
        await super.goto("https://www.facebook.com/");
    }
  async signupLink() {
        await this.signup.click();
    }

  async verifySignupPage() {
        await expect(this.page).toHaveTitle("Facebook");
        await expect(this.page).toHaveURL("https://www.facebook.com/reg/?entry_point=login&next=");
    }  
  async enterUserNameAndPass(username, password) {
        await this.userName.fill(username);
        await this.password.fill(password);
    }
  // Fixed: selectMonthByText - handle both select dropdowns and regular dropdowns
  async selectMonthByText(monthText) {
    try {
        // Try selectOption first (for <select> elements)
        await this.month.selectOption(monthText);
    } catch (error) {
        // If selectOption fails, it might be a custom dropdown
        // Try clicking and selecting from visible options
        await this.month.click();
        const option = this.page.locator(`//div[text()='${monthText}']`);
        await option.click();
    }
  }

  // Enhanced method to select dropdown by any locator
  async selectOptionByText(locator, value) {
    try {
        await locator.selectOption(value);
    } catch (error) {
        await locator.click();
        const option = this.page.locator(`//div[text()='${value}']`);
        await option.click();
    }
  }
}

module.exports = SignupPage;

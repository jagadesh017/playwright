const BasePage = require('../tests/BasePage.js');

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
  async enterUserNameAndPass(username, password) {
        await this.userName.fill(username);
        await this.password.fill(password);
    }
  async selectMonthByText(monthText) {

 await this.month.selectOption(monthText);
 }
 }


  module.exports = SignupPage;
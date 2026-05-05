const BasePage = require('../tests/BasePage.js');

        class FacebookLoginPage extends BasePage {
            constructor(page) {
                super(page);

                // Define locators as properties
                this.emailInput = page.locator("#_R_64mkqsr9pb6amH1_");
                this.passwordInput = page.locator("#_R_66mkqsr9pb6amH1_");
                this.loginButton = page.locator("//div[@class='x1ja2u2z x78zum5 x2lah0s x1n2onr6 xl56j7k x6s0dn4 xozqiw3 x1q0g3np x972fbf x10w94by x1qhh985 x14e42zd x9f619 xtvsq51 xqbgfmv xbe3n85 x7a1id4 x1d9i5bo x1xila8y x1bumbmr xc8cyl1']");
                this.errorMessage = page.locator("//span[@class='x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs xt0psk2 xlh3980 xvmahel xnk8lw1 xuarlqh xuemr51 x1fnpb41 x1a1m0xk x1yc453h']");
            }

            // Override goto to navigate to the specific Facebook URL
            async goto() {
                await super.goto("https://www.facebook.com/");
            }

            // Method to perform login
            async login(username, password) {
                await this.emailInput.fill(username);
                await this.passwordInput.fill(password);
                await this.loginButton.click();
            }

            // Method to get the error message text
            async getErrorMessage() {
                return await this.errorMessage.textContent();
            }

            // Method to check if error message contains specific text
            async expectErrorMessage(expectedText) {
                await expect(this.errorMessage).toContainText(expectedText);
            }
        }

        module.exports = FacebookLoginPage;
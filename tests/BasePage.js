class BasePage {
    constructor(page) {
        this.page = page;
    }

    // Common navigation method that takes a URL
    async goto(url) {
        await this.page.goto(url);
    }
}

module.exports = BasePage;
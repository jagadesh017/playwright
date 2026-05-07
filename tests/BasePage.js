const { expect } = require('@playwright/test');

class BasePage {
    constructor(page) {
        this.page = page;
    }

    // Common navigation method that takes a URL
    async goto(url) {
        await this.page.goto(url);
    }

    // Common method to select dropdown by text
    async selectDropdownByText(selector, value) {
        await this.page.locator(selector).selectOption(value);
    }

    // Common method to select dropdown by value attribute
    async selectDropdownByValue(selector, value) {
        await this.page.locator(selector).selectOption({ value });
    }

    // Common method to get text content
    async getText(selector) {
        return await this.page.locator(selector).textContent();
    }

    // Common method for filling input
    async fillInput(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    // Common method for clicking
    async clickElement(selector) {
        await this.page.locator(selector).click();
    }
}

module.exports = BasePage;
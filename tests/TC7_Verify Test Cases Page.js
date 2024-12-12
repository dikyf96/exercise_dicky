const { expect } = require('@playwright/test');
const { Browser } = require('./Browser');

async function TestCase7() {
     // Launch browser
     const { browser, context, page } = await Browser();

     // Navigate to url 'http://automationexercise.com'
     await page.goto("https://automationexercise.com/");
 
     // Verify that home page is visible successfully
     const title = await page.title();
        expect(title).toBe('Automation Exercise');

    // Click on 'Test Cases' button
     await page.getByRole('link', { name: ' Test Cases' }).click();

    //  Verify user is navigated to test cases page successfully
     const title_test_cases = await page.title();
        expect(title_test_cases).toBe('Automation Practice Website for UI Testing - Test Cases');

    return { browser, context, page };
}

module.exports = { TestCase7 };
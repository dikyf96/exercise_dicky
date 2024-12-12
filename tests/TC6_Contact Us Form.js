const { expect } = require('@playwright/test');
const { Browser } = require('./Browser');

async function TestCase6() {
     // Launch browser
     const { browser, context, page } = await Browser();

     // Navigate to url 'http://automationexercise.com'
     await page.goto("https://automationexercise.com/");
 
     // Verify that home page is visible successfully
     const title = await page.title();
     expect(title).toBe('Automation Exercise');

     await page.getByRole('link', { name: ' Contact us' }).click();

     await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
     const get_in_touch = await page.getByRole('heading', { name: 'Get In Touch' }).innerText();
        console.log(get_in_touch);

    await page.getByPlaceholder('Name').fill('Dicky Ferdiansyah');
    await page.getByPlaceholder('Email', { exact: true }).fill('automationtest@gmail.com');
    await page.getByPlaceholder('Subject').fill('Automation Test');
    await page.getByPlaceholder('Your Message Here').fill('This is an automation test');

    const file_input = page.locator('input[type="file"]');
    await file_input.setInputFiles('tests\\Upload\\Ronaldo.jpg');

    await page.getByRole('button', { name: 'Submit' }).click();

    return { browser, context, page };
}

module.exports = { TestCase6 };
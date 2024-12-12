const { expect } = require('@playwright/test');
const { Browser } = require('./Browser');

async function TestCase3() {
    // Launch browser
    const { browser, context, page } = await Browser();

    // Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com/");

    // Verify that home page is visible successfully
    const title = await page.title();
    expect(title).toBe('Automation Exercise');

    // Click on 'Signup / Login' button
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    
    // Verify 'Login to your account' is visible
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

    // Enter incorrect email address and password
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('dicky@example.com');
    await page.getByPlaceholder('Password').fill('1243456');

    // Click 'login' button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify error 'Your email or password is incorrect!' is visible
    await expect(page.getByText('Your email or password is')).toBeVisible();
    const error_message = await page.getByText('Your email or password is').innerText();
    console.log(error_message);

    return { browser, context, page };
}

module.exports = { TestCase3 };
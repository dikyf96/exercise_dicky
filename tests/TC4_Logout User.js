const { expect } = require('@playwright/test');
const { Browser } = require('./Browser');

async function TestCase4() {
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

    // Enter correct email address and password
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('mejiku1996@gmail.com');
    await page.getByPlaceholder('Password').fill('123456');

    // Click 'login' button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify that 'Logged in as username' is visible
    await expect(page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a')).toBeVisible();
    const logged_username = await page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a/b').innerText();
    console.log('Username Login: ', logged_username);

    // Click 'Logout' button
    await page.getByRole('link', { name: ' Logout' }).click();

    // Verify that user is navigated to login page
    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');

    return { browser, context, page };
}

module.exports = { TestCase4 };
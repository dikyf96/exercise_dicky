const { expect } = require('@playwright/test');
const { Browser } = require('./Browser');

async function TestCase2() {
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
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('dicky@example.com');
    await page.getByPlaceholder('Password').fill('123456');

    // Click 'login' button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify that 'Logged in as username' is visible
    await expect(page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a')).toBeVisible();

    const logged_username = await page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a/b').innerText();
    console.log('Username Login: ', logged_username);

    // Click 'Delete Account' button
    await page.getByRole('link', { name: ' Delete Account' }).click();

    // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.getByText('Account Deleted!')).toBeVisible();
    const Account_deleted = await page.getByText('Account Deleted!').innerText();
    console.log(Account_deleted);
    await page.getByRole('link', { name: 'Continue' }).click();

    return { browser, context, page };
}

module.exports = { TestCase2 };
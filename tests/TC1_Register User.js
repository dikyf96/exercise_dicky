const { expect } = require('@playwright/test');
const { Browser } = require('./Browser');

async function TestCase1() {
    // Launch browser
    const { browser, context, page } = await Browser();

    // Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com/");

    // Verify that home page is visible successfully
    const title = await page.title();
    expect(title).toBe('Automation Exercise');

    // Click on 'Signup / Login' button
    await page.getByRole('link', { name: ' Signup / Login' }).click();

    // Verify 'New User Signup!' is visible
    await expect(page.locator("//h2[contains(text(),'New User Signup!')]")).toBeVisible();

    // Enter name and email address
    await page.getByPlaceholder('Name').fill('Dicky Ferdiansyah');
    await page.locator('form').filter({ hasText: 'Signup' })
        .getByPlaceholder('Email Address')
        .fill('mejiku1996@gmail.com');

    // Click 'Signup' button
    await page.getByRole('button', { name: 'Signup' }).click();

    // Verify that 'ENTER ACCOUNT INFORMATION' is visible
    await expect(page.getByText('Enter Account Information')).toBeVisible();

    // Fill details: Title, Name, Email, Password, Date of birth
    await page.getByLabel('Mr.').check();
    await page.getByLabel('Password *').fill('123456');
    await page.locator('#days').selectOption({ value: '13' });
    await page.locator('#months').selectOption({ value: '1' });
    await page.locator('#years').selectOption({ value: '1996' });

    // Select checkbox 'Sign up for our newsletter!'
    await page.getByLabel('Sign up for our newsletter!').check();
    
    // Select checkbox 'Receive special offers from our partners!'
    await page.getByLabel('Receive special offers from our partners!').check();

    // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await page.getByLabel('First name *').fill('Dicky');
    await page.getByLabel('Last name *').fill('Ferdiansyah');
    await page.getByLabel('Company', { exact: true }).fill('PT. Maju Mundur');
    await page.getByLabel('Address * (Street address, P.').fill('Jl. Automation Exercise No. 1');
    await page.getByLabel('Address 2').fill('Jl. Automation Exercise No. 2');
    await page.getByLabel('Country *').selectOption({ value: 'United States' });
    await page.getByLabel('State *').fill('New York');
    await page.getByLabel('City *').fill('Jakarta');
    await page.locator('#zipcode').fill('12345');
    await page.getByLabel('Mobile Number *').fill('081234567890');

    // Click 'Create Account button'
    await page.getByRole('button', { name: 'Create Account' }).click();

    // Verify that 'ACCOUNT CREATED!' is visible
    await expect(page.getByText('Account Created!')).toBeVisible();

    // Click 'Continue' button  
    await page.getByRole('link', { name: 'Continue' }).click();

    // Verify that 'Logged in as username' is visible
    await expect(page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a')).toBeVisible();
    const logged_username = await page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a/b').innerText();
    console.log('Username Login: ', logged_username);

    // Click 'Delete Account' button
    // await page.getByRole('link', { name: ' Delete Account' }).click();

    // // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    // await expect(page.getByText('Account Deleted!')).toBeVisible();
    // const Account_deleted = await page.getByText('Account Deleted!').innerText();
    // console.log(Account_deleted);
    // await page.getByRole('link', { name: 'Continue' }).click();

    return { browser, context, page };
}

module.exports = { TestCase1 };


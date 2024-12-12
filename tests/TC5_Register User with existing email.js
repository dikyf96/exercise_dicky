const { expect } = require('@playwright/test');
const { Browser } = require('./Browser');

async function TestCase5() {
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

     // Verify error 'Email Address already exist!' is visible
     await expect(page.getByText('Email Address already exist!')).toBeVisible();
     const error_message = await page.getByText('Email Address already exist!').innerText();
        console.log(error_message);

    return { browser, context, page };
}

module.exports = { TestCase5 };
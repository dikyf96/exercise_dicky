let { TestCase1 } = require('./TC1_Register User');
let { TestCase2} = require('./TC2_Login User with correct email and password');
let { TestCase3 } = require('./TC3_Login User with incorrect email and password');
let { TestCase4 } = require('./TC4_Logout User');
let { TestCase5 } = require('./TC5_Register User with existing email');
let { TestCase6 } = require('./TC6_Contact Us Form');
let { TestCase7 } = require('./TC7_Verify Test Cases Page');
const { test } = require('@playwright/test');

test('Automation Exercises', async () => {

    // Replace with comment if you are not used the test case

    // await TestCase1();
    // await TestCase2();
    // await TestCase3();
    // await TestCase4();
    // await TestCase5();
    // await TestCase6();
    await TestCase7();


});
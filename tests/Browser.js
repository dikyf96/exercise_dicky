const { chromium } = require('playwright');

async function Browser() {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    return { browser, context, page };

}

module.exports = { Browser };

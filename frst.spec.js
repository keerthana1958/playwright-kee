const { test, expect } = require('@playwright/test')

test('Avanti', async({page})=>

{

await page.goto('https://flutter-web-avanti-dot-indihood-qa-in.appspot.com/')
const pageTitle =page.title();
console.log('page title is', pageTitle)
await expect(page).toHaveTitle('avanti')

await page.close()




})
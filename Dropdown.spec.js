import{test,expect} from '@playwright/test';
test('Handling dropdown',async({page})=>

{
await page.goto("https://testautomationpractice.blogspot.com/")
//await page.locator("#country").selectOption({label: 'India'})
//await page.locator("#country").selectOption('India')
//await page.locator("#country").selectOption({value: 'uk'})
//await page.locator("#country").selectOption({index: 1})
const options = await page.locator('#country option')
await expect(options).toHaveCount(10)

await page.waitForTimeout(5000)

}


)
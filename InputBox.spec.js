const {test, expect}=require('@playwright/test')
test('Inputbox',async({page}) =>
{
await page.goto('https://testautomationpractice.blogspot.com/')
await expect(await page.locator("//input[@id='name']")).toBeVisible()
await expect(await page.locator("//input[@id='name']")).toBeEmpty()
await expect(await page.locator("//input[@id='name']")).toBeEditable()
await expect(await page.locator("//input[@id='name']")).toBeEnabled()
await page.locator("//input[@id='name']").fill("keerthana")
await page.fill("//input[@id='email']","keerthana@qaoncloud.com")

await page.waitForTimeout(2000)




}




)

import{test,expect} from '@playwright/test';
test('Rightclick',async({page})=>

{
await page.goto('https://testautomationpractice.blogspot.com/')
await page.fill("//input[@id='datepicker']",'06/02/2025')

await page.waitForTimeout(5000)
})
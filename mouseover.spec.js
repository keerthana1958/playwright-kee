import{test,expect} from '@playwright/test';
test('mouseover',async({page})=>

{
await page.goto('https://testautomationpractice.blogspot.com/')
const pointme = await page.locator("//button[@class='dropbtn']")


const mobiles = await page.locator("//a[normalize-space()='Mobiles']")
await pointme.hover()
await mobiles.hover()


await page.waitForTimeout(5000)
})
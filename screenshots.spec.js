import{test,expect} from '@playwright/test';

test('SC page',async({page})=>

{
await page.goto("https://www.qaoncloud.com/")
await page.screenshot({path:'tests/ss/'+Date.now()+'Homepage.png'})
await page.waitForTimeout(5000)

}



)
test('full page',async({page})=>

{
await page.goto("https://www.qaoncloud.com/")
await page.screenshot({path:'tests/ss'+Date.now()+'full.png',fullPage:true})
await page.waitForTimeout(5000)

})
test('element page',async({page})=>

{
await page.goto("https://desicrew.in/")
await page.locator("//div[@class='elementor-element elementor-element-1f695b7 e-con-full e-flex e-con e-child']").screenshot({path:'tests/ss'+Date.now()+'desi.png',fullPage:true})
await page.waitForTimeout(5000)

})
import{test,expect} from '@playwright/test';
test('uploadfile',async({page})=>{


await page.goto('https://demos.telerik.com/aspnet-ajax/asyncupload/examples/draganddrop/defaultcs.aspx')
await page.waitForTimeout(5000)
await page.locator("//input[@id='ctl00_ContentPlaceholder1_RadAsyncUpload1file0']").setInputFiles('tests/upload/test (2).csv')

await page.waitForTimeout(5000)









})

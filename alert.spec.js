import{test,expect} from '@playwright/test';

test.skip('alert',async({page})=>

{
    await page.goto("https://testautomationpractice.blogspot.com/")
//enable dialog window
page.on('dialog',async dialog =>
{
expect(dialog.type()).toContain('alert')
expect(dialog.message()).toContain('I am an alert box!')
await dialog.accept()
})
await page.click("//button[@id='alertBtn']")

await page.waitForTimeout(5000)

}



)
test.skip('confirmationalert',async({page})=>

{
    await page.goto("https://testautomationpractice.blogspot.com/")
//enable dialog window
page.on('dialog',async dialog =>
{
expect(dialog.type()).toContain('confirm')
expect(dialog.message()).toContain('Press a button!')
await dialog.accept()
})
await page.click("//button[@id='confirmBtn']")

await page.waitForTimeout(5000)
await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')

}



)
test('promptalert',async({page})=>

{
    await page.goto("https://testautomationpractice.blogspot.com/")
//enable dialog window
page.on('dialog',async dialog =>
{
expect(dialog.type()).toContain('prompt')
expect(dialog.message()).toContain('Please enter your name:')
expect(dialog.defaultValue()).toContain('Harry Potter')
await dialog.accept('keerthana')
})
await page.click("//button[@id='promptBtn']")

await page.waitForTimeout(5000)
await expect(page.locator("//p[@id='demo']")).toHaveText('Hello keerthana! How are you today?')
await page.waitForTimeout(5000)
}



)
   const {test, expect}= require('@playwright/test');

test("method to validate list of webelements", async ({page})=>
{
    const userName = page.locator("#userEmail")
    const pwd= page.locator("#userPassword")
    const signIn= page.locator("#login")
    const titles=page.locator("div.card-body b")

   await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
   await userName.fill("jagadesh017@gmail.com")
   await pwd.fill("Test@123")
   await signIn.click()
   console.log(await page.title())
   await titles.first().waitFor()
    console.log("the total no of product are : "+await titles.count())
    await page.waitForLoadState("networkidle")

    console.log("all titles are :" + await titles.allTextContents())
})



test.only("dropdowns and radio buttons", async({page})=>
{
    const userName = page.locator("#username")
    const pwd= page.locator("input[name='password']")
    const terms= page.locator("#terms")
    const signIn= page.locator("#signInBtn")
    const titles=page.locator("div.card-body h4")
    const blinklink = page.locator("a[href*='https://rahulshetty']")

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   await userName.fill("rahulshettyacademy")
   await pwd.fill("Learning@830$3mK2")

   //select radio button
    await page.locator("//*[text()=' User']//following-sibling::span").click();
    await page.locator("#okayBtn").click()

    console.log(await page.locator("//*[text()=' User']//following-sibling::span").isChecked)
    await expect(page.locator("//*[text()=' User']//following-sibling::span")).toBeChecked


   //drop down select validation

  const dropdown= await page.locator("select.form-control")
  // to pause the execution we can user pause keyword 
  //await page.pause()
  
  await dropdown.selectOption("Teacher")

  //await page.pause()
  await terms.click()
  expect(await page.locator("#terms")).toBeChecked()
  await terms.click()
  expect(await page.locator("#terms").isChecked()).toBeFalsy()


  await expect(blinklink).toHaveAttribute("class", "blinkingText")

})

test("window handles", async ({browser})=>
{
    const context = await browser.newContext()
    const page= await context.newPage()
    await page.goto("")

})
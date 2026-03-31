   const {test, expect}= require('@playwright/test');

// basic syntax of launch browser
   test("My first test case", async ({browser})=>{

    const context = await browser.newContext()
       const page=  await context.newPage()
      await page.goto("https://google.com")
    
   })
// we can minimize above code by passing page parameter

test("fist scipt", async({page})=>
{
   await page.goto("https://crex.com")
})

//scenario: we need to get title and verify

test("title validation" , async({page})=>
{
    await page.goto("https://google.com")
    const title= await page.title()
    console.log(title)
    await expect(page).toHaveTitle("Google")
})

test.only("login to home page", async({page})=>
{

    await page.goto("https://www.facebook.com/")
    console.log(await page.title()); 
    await page.locator("#_R_64qjbjb9pb6amH1_").fill("jagadeesh")
    await page.locator("[type='password']").fill("password")
    await page.locator("//div[@class='x1ja2u2z x78zum5 x2lah0s x1n2onr6 xl56j7k x6s0dn4 xozqiw3 x1q0g3np x972fbf x10w94by x1qhh985 x14e42zd x9f619 xtvsq51 xqbgfmv xbe3n85 x7a1id4 x1d9i5bo x1xila8y x1bumbmr xc8cyl1']").click();



})


import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

afterEach (async() => {
    await driver.sleep(6000)
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Testing the draw button displaying div with choices id', async () => {
    const buttonClick = await driver.findElement(By.id('draw')).click()
    const displayed = await driver.findElement(By.id('player-duo')).isDisplayed()
    expect(displayed).toBe(true)
})
test('Checking if the See all Bots button displays any robot.', async () => {
    const originalPage = await driver.getPageSource();
    const buttonClick = await driver.findElement(By.id('see-all')).click()
    //this line below will help me compare the new html to the original html to see if anything changed
    const displayed = await driver.getPageSource();
    expect(displayed).not.toBe(originalPage);
})
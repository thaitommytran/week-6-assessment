
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
});

test('Draw button displays the div with id = "choices"', async () => {
    await driver.findElement(By.id("draw")).click();
    const botContainer = await driver.findElement(By.id("choices"));
    const displayed = await botContainer.isDisplayed();
    expect(displayed).toBeTruthy();
    await driver.sleep(5000);
});

test('"Add to duo" button displays the div with id = "player-duo"', async () => {
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.className("bot-btn")).click();
    const playerDuo = await driver.findElement(By.id("player-duo"));
    const displayed2 = await playerDuo.isDisplayed();
    expect(displayed2).toBeTruthy();
    await driver.sleep(5000);
});
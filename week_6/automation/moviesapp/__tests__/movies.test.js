const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

let driver;

beforeAll(async () => {
	driver = new Builder().forBrowser(Browser.CHROME).build();
	await driver.get('http://localhost:3000');
	await driver
		.findElement(By.css('#add-movie-input'))
		.sendKeys('The Matrix', Key.ENTER);
});

afterAll(async () => {
	await driver.quit();
});

describe('tests movies app', () => {
	test('checks if movie watched works', async () => {
		const checkbox = await driver.findElement(By.css('#movies-list li input'));
		checkbox.click();
		expect(await checkbox.getAttribute('checked')).toBe('true');
	});
	test('checks if movie delete works', async () => {
		const button = await driver.findElement(By.css('#movies-list li button'));
		button.click();
	});
	test('checks if the warning works', async () => {
		const alert = await driver.findElement(By.css('aside'));
		expect(await alert.getText()).toBe('The Matrix deleted!');
	});
});

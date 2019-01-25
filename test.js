require('chromedriver');
const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Checkout Google.com', function () {
    it('Search on Google', function() {

        let driver = new Builder()
            .forBrowser('chrome')
            .build();
        
        driver.get('http://www.google.com/ncr');
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        driver.quit();
        
    })
    
})
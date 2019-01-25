require('./utils/setenv');
require('chromedriver');
const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Checkout Google.com', function () {
    it('Search on Google', function() {


        const webdriver = require('selenium-webdriver');
        const driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
        
        driver.get('http://www.google.com/ncr');
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        driver.quit();
        
    })
    
})



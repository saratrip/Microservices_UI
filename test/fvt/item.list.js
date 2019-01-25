// module.exports = {
//   'Item List Test' : function (client) {
//     require('../../utils/setenv')
//     console.log('#### global.microserviceUrls = ', global.microserviceUrls)
//     client
//       .url(global.microserviceUrls.uiServer || 'http://localhost:3010')
//       .waitForElementVisible('body', 5000)
//       .assert.title('Microservices Sample')
//       .waitForElementVisible('div.item:first-child', 10000)
//       .assert.containsText('div.item:first-child',
//         'Monitor')
//       .end();
//   }
// }

require('chromedriver');
require('../../utils/setenv');
const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Checkout Google.com', function () {
    it('Search on Google', function() {

        let driver = new Builder()
            .forBrowser('chrome')
            .build();
        
        driver.get(global.microserviceUrls);
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        driver.quit();
        
    })
    
})
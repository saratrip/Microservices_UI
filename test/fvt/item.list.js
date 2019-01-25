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
 
require('../../utils/setenv')
require('chromedriver');
const webdriver = require('selenium-webdriver');
const assert = require('assert');
const {Builder, By, Key, until} = webdriver;

describe('Item List Test', function () {
  it('Item List Test - 8 items', function() {
    const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build()
    driver.get(global.microserviceUrls.uiServer)
    driver.wait(until.titleIs('Microservices Sample - 8 items'), 5000)
    driver.quit()
    // driver.executeScript('return document.title').then(function(return_value) {
    //   console.log('####### return_value = ', return_value)
    //   assert.equal(return_value, 'Microservices Sample - 8 items')
    //   driver.quit()
    // })        
  })
})